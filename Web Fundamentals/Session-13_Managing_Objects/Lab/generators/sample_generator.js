// Why we need generators:
// Suppose we have an array with a million elements and we want to process each element one by one.
// If we use a for loop to iterate over the array, it will take a lot of time and memory.
// Instead, we can use a generator to iterate over the array lazily, i.e., one element at a time.

// Sample code explaining the problem:
const bigArray = Array.from({ length: 1000000 }, (_, i) => i);

//Loads entire array into memory, put debug point and show
for (let i = 0; i < bigArray.length; i++) {
  console.log(bigArray[i]);
}

// The above code will print all the elements of the big array, but it will take a lot of time and memory to execute.

// Now let's use a generator to fix the problem:

// Generators are functions that can be paused and resumed.
// We define a generator function using the function* syntax.
// Inside the generator function, we use the yield keyword to pause the function and return a value.
// When the generator is resumed, it continues executing from where it left off.

// Sample code for generator to fix the problem:
// Loads only one element into memory
// function* generateArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     yield array[i];
//   }
// }

// const bigArray = Array.from({ length: 1000000 }, (_, i) => i);
// const generator = generateArray(bigArray);

// for (const element of generator) {
//   console.log(element);
// }

// The above code will also print all the elements of the big array, but it will do so lazily, i.e., one element at a time.
// The generator function is paused after each yield statement, so it doesn't consume a lot of memory.
// The for...of loop consumes only one element at a time, so it doesn't take a lot of time to execute.
