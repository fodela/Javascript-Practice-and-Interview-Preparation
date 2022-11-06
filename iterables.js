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
