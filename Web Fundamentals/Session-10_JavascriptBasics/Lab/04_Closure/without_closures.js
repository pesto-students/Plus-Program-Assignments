let globalVariable = "I am global!"; // Global scope - variables defined outside any function or block

function outerFunction() {
  let outerVariable = "I am outside innerFunction!"; // Function scope - variables defined inside a function

  function innerFunction() {
    let innerVariable = "I am inside innerFunction!"; // Local scope - variables defined inside a block

    console.log(innerVariable); // innerFunction can access all variables in its outer scope
    console.log(outerVariable);
    console.log(globalVariable);

    // Block scope inside innerFunction
    {
      let blockVariable = "I am inside a block!"; // Block scope - variables defined inside a block (introduced in ES6)
      console.log(blockVariable);
    }

    // This will throw a ReferenceError because blockVariable is not defined in this scope
    // console.log(blockVariable);
  }

  innerFunction();

  console.log(outerVariable); // outerFunction can access its own variables and global variables
  console.log(globalVariable);
}

outerFunction();

// Without Closure: This will throw a ReferenceError because innerVariable is not defined in this scope
// console.log(innerVariable);

// Without Closure: This will throw a ReferenceError because blockVariable is not defined in this scope
// console.log(blockVariable);
