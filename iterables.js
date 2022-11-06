// iterables

/*
Construct a function isIterable() that takes in an object and returns a Boolean value depending on whether or not the object is iterable.

Hint: You just need to know how to check for a property on a given object. That's it!
An iterable must meet the iterable protocol thus the object must have an @@iterator() method defined.
*/
const isIterable = (obj) => {
	return Symbol.iterator in Object(obj);
};
console.log(isIterable("fodela"));

/*
Make iterable from non iterable

Configure Object.prototype such that the following code:

var o = {x: 10, y: 20, z: 30}

for (var v of o) {
   console.log(v);
} 
gives the following output:
10
20
30

*/

Object.prototype[Symbol.iterator] = function () {
	return Object.values(this)[Symbol.iterator]();
};

let o = { x: 10, y: 20, z: 30 };

for (let v of o) {
	console.log(v);
}

Object.prototype[Symbol.iterator] = function () {
	return Object.keys(this)[Symbol.iterator]();
};

for (let k of o) {
	console.log(o[k]);
}
