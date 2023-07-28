// This function returns a function that increments a private variable "count"
function counter() {
  let count = 0; // this variable is private to the inner function

  // This is the inner function that increments and logs the private variable
  function incrementClosure() {
    count++; // Holds the reference of count even if the context is lost
    console.log(count);
  }

  // Return the inner function as a result of the outer function
  return incrementClosure;
}

// Call the outer function to get the inner function
const incrementRefClosure = counter();

// Call the inner function multiple times
incrementRefClosure(); // Output: 1
incrementRefClosure(); // Output: 2
incrementRefClosure(); // Output: 3
