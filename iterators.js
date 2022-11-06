// // make an iterator using
// // 1. a custom function
// // 2. a generator
// // 3. custom for of
// // 4. custom while loop

// const makeIter = (arr) => {
// 	ind = -1;
// 	next: () => {
// 		ind++;
// 		return {
// 			value: arr[int],
// 			done: false,
// 		};
// 	};
// 	return next;
// };

// const iter = makeIter([1, 5, 16]);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

var num = 1566;

for (var n of num) {
	console.log(n);
}
