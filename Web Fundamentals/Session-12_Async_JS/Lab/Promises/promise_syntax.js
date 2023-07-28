// Basic Promise syntax
const myPromise = new Promise((resolve, reject) => {
  // code block to be executed asynchronously

  // If the operation is successful, call resolve() and pass the result
  if (true) {
    resolve(result); // pass the result to the "then" block
  }

  // If the operation fails, call reject() and pass the error message
  else {
    reject(error); // pass the error message to the "catch" block
  }
});

// Example usage
myPromise
  .then((result) => {
    // code block to be executed if the promise is resolved successfully
  })
  .catch((error) => {
    // code block to be executed if the promise is rejected with an error
  })
  .finally(() => {
    // code block to be executed regardless of whether the promise was resolved or rejected
  });
