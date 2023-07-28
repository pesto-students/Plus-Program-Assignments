// Define a function that takes an array as its argument and returns an iterator object.
function createIterator(array) {
  let nextIndex = 0;

  // Return an object that has a `[Symbol.iterator]` method.
  // This method returns the iterator object itself, which means that the object is both iterable and an iterator.
  // This is necessary to make the object iterable with the `for..of` loop.
  return {
    [Symbol.iterator]: function () {
      return this;
    },
    // The `next()` method returns an object with two properties: `value` and `done`.
    // If there are more values in the array, `value` is set to the next value and `done` is set to `false`.
    // If there are no more values in the array, `value` is undefined and `done` is set to `true`.
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

// Use the `for..of` loop to iterate over the elements of the `iterator` object.
// The `for..of` loop automatically calls the `[Symbol.iterator]` method on the object to get an iterator,
// and then calls the `next()` method on the iterator to get each value in turn.
// When there are no more values, the loop terminates.
for (const value of iterator) {
  console.log(value);
}
// Output:
// 1
// 2
// 3
