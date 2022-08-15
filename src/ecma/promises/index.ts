// // Promise that resolve with state |> fulfilled
// const promiseWillFulfill = new Promise(function (resolve, reject) {
// 	// the function is executed automatically when the promise is constructed
// 	// after 1 second signal that the job is done with the result "done"
// 	setTimeout(() => resolve('done'), 1000);
// });

// promiseWillFulfill
// 	.finally(() => console.log('do cleanup on fulfilled a')) // shows 'do cleanup on fulfilled a'
// 	.then(
// 		(result) => console.log(`${result} a`), // shows "done! a" after 1 second
// 		(error) => console.log(error), // doesn't run
// 	).finally(() => console.log('do cleanup on fulfilled c')); // shows 'do cleanup on fulfilled c'

// promiseWillFulfill
// 	.then((result) => console.log(`${result} b`)) // shows "done! b" after 1 second
// 	.catch((error) => console.log(error)) // doesn't run
// 	.finally(() => console.log('do cleanup on fulfilled b')); // shows 'do cleanup on fulfilled b'

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
// });
// expected output: "two"

// // Promise that resolve with state |> rejected
// const promiseWillReject = new Promise(function (resolve, reject) {
// 	// after 1 second signal that the job is finished with an error
// 	setTimeout(() => reject(new Error('Whoops!')), 1000);
// });

// promiseWillReject
// 	.then(
// 		(result) => console.log(result), // doesn't run
// 		(error) => console.log(error), // shows "Error: Whoops!" after 1 second
// 	)
// 	.finally(() => console.log('do cleanup on rejected')); // shows 'do cleanup'

// promiseWillReject
// 	.then((result) => console.log(result)) // doesn't run
// 	.catch((error) => console.log(error)) // shows "Error: Whoops!" after 1 second
// 	.finally(() => console.log('do cleanup on rejected')); // shows 'do cleanup'

// // another example
// function checkMail() {
// 	return new Promise((resolve, reject) => {
// 		if (Math.random() > 0.5) {
// 			resolve('Mail has arrived');
// 		} else {
// 			reject(new Error('Failed to arrive'));
// 		}
// 	});
// }

// checkMail()
// 	.then((mail) => {
// 		console.log(mail);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	})
// 	.finally(() => {
// 		console.log('Experiment completed');
// 	});

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));
