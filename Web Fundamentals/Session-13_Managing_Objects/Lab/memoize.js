// Define a function to memoize
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Define a memoization function
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

// Memoize the fibonacci function
const memoizedFibonacci = memoize(fibonacci);

// Call the memoized function with different arguments
console.log(memoizedFibonacci(5)); // Output: 5
// Debug point here and show how memoize works here
console.log(memoizedFibonacci(5)); // Output: 5
console.log(memoizedFibonacci(10)); // Output: 55
console.log(memoizedFibonacci(15)); // Output: 610
console.log(memoizedFibonacci(20)); // Output: 6765
