function* generateSequence(start, end) {
	for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
	// 0..9
	yield* generateSequence(48, 57);

	// A..Z
	yield* generateSequence(65, 90);

	// a..z
	yield* generateSequence(97, 122);
}

let str = '';

for (let code of generatePasswordCodes()) {
	str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z

// sync version
let range = {
	from: 1,
	to: 5,

	*[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
		for (let value = this.from; value <= this.to; value++) {
			yield value;
		}
	},
};

for (let value of range) {
	alert(value); // 1, then 2, then 3, then 4, then 5
}

// async version
(async () => {
	let asyncRange = {
		from: 1,
		to: 5,

		// this line is same as [Symbol.asyncIterator]: async function*() {
		async *[Symbol.asyncIterator]() {
			for (let value = this.from; value <= this.to; value++) {
				// make a pause between values, wait for something
				await new Promise((resolve) => setTimeout(resolve, 1000));
				yield value;
			}
		},
	};

	for await (let value of asyncRange) {
		alert(value); // 1, then 2, then 3, then 4, then 5
	}
})();

// pagination
(async () => {
	async function* fetchCommits(repo) {
		let url = `https://api.github.com/repos/${repo}/commits`;

		while (url) {
			const response = await fetch(url, { // (1)
				headers: { 'User-Agent': 'Our script' }, // github needs any user-agent header
			});

			const body = await response.json(); // (2) response is JSON (array of commits)

			// (3) the URL of the next page is in the headers, extract it
			let nextPage = response.headers.get('Link').match(
				/<(.*?)>; rel="next"/,
			);
			nextPage = nextPage?.[1];

			url = nextPage;

			for (let commit of body) { // (4) yield commits one by one, until the page ends
				yield commit;
			}
		}
	}

	let count = 0;
	for await (
		const commit of fetchCommits('javascript-tutorial/en.javascript.info')
	) {
		console.log(commit.author.login);

		if (++count == 100) { // let's stop at 100 commits
			break;
		}
	}
})();
