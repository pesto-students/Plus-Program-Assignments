console.log("I am Globally available");
setTimeout(function () {
  console.log(
    "I am inside a callback function that will be executed after 3 seconds"
  );
}, 3000);
setTimeout(function () {
  console.log(
    "I am inside a callback function that will be executed after 0 second"
  );
}, 0);
console.log("I am also Globally available");
// Output order:
// I am Globally available

// I am also Globally available

// I am inside a callback function that will be executed after 0 second

// I am inside a callback function that will be executed after 3 seconds
