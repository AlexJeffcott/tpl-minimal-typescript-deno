// split task iterations when each iteration is intensive
let i = 0;
const start = Date.now();

function count(numberOfIterationsPerSplit = 1e6, maxIterations = 1e9) {
	// checks to see whether to create another split
	// calls count maxIterations/numberOfIterationsPerSplit times
	if (i < maxIterations - numberOfIterationsPerSplit) {
		setTimeout(count);
	}

	do {
		i++;
	} while (i % numberOfIterationsPerSplit !== 0); // inc i until it can be divided by numberOfIterationsPerSplit without remainder

	if (i === maxIterations) {
		alert('Done in ' + (Date.now() - start) + 'ms');
	}
}

count();
