// Define a function that takes an array as its argument and returns an iterator object.
function createIterator(array) {
  let nextIndex = 0; // Initialize a variable to keep track of the current index.

  // Return an object that has a `next()` method, which returns the next value in the array.
  // The `next()` method returns an object with two properties: `value` and `done`.
  // If there are more values in the array, `value` is set to the next value and `done` is set to `false`.
  // If there are no more values in the array, `value` is undefined and `done` is set to `true`.
  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const myArray = [1, 2, 3];

// Call the `createIterator()` function with the `myArray` array as its argument.
// This returns an iterator object, which we store in the `iterator` variable.
const iterator = createIterator(myArray);

// Call the `next()` method on the `iterator` object to get the next value in the array.
// The `next()` method returns an object with two properties: `value` and `done`.
// We can access the `value` property to get the next value in the array.
console.log(iterator.next()); // { value: 1, done: false }

// We can call the `next()` method again to get the next value in the array.
console.log(iterator.next()); // { value: 2, done: false }

// We can call the `next()` method as many times as we want to iterate over the entire array.
console.log(iterator.next()); // { value: 3, done: false }

// When there are no more values in the array, the `done` property is set to `true`.
console.log(iterator.next()); // { done: true }
