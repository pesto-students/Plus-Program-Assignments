var globalVariable = "I am a global variable"; // This variable has global scope and can be accessed anywhere in the code

function globalFunction() {
  console.log(globalVariable); // This will output "I am a global variable"
}

globalFunction();

// ------------
function localFunction() {
  var localVariable = "I am a local variable"; // This variable has local scope and can only be accessed inside the function
  console.log(localVariable); // This will output "I am a local variable"
}

localFunction();
console.log(localVariable); // This will output an error because localVariable is not defined outside the function

// ------------
if (true) {
  let blockVariable = "I am a block variable"; // This variable has block scope and can only be accessed inside the if block
  console.log(blockVariable); // This will output "I am a block variable"
}

console.log(blockVariable); // This will output an error because blockVariable is not defined outside the if block

// ------------
function parameterFunction(parameterVariable) {
  console.log(parameterVariable); // This will output the value passed as a parameter to the function
}

parameterFunction("I am a parameter variable");
