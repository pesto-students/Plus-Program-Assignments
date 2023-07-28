// we can assign IIFE to variable
// we define an IIFE that creates a private variable privateVar
const myModule = (function () {
  // I do not want the outside world to access this variable
  let privateVar = "Hello World";

  function publicMethod() {
    console.log(privateVar);
  }

  return {
    publicMethod,
  };
})();

myModule.publicMethod(); // Output: 'Hello World'
