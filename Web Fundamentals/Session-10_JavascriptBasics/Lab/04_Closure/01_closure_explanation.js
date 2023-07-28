function SomeFunction() {
  let enclosingScopeVariable = "I am enclosed inside function!";

  //Closure: A function inside another function, that remember the values of variables from their enclosing scopes
  function innerFunction() {
    console.log(enclosingScopeVariable);
  }

  return innerFunction;
}

// innerRefClosure now holds a reference to innerFunction via closure function
const innerRefToClosure = SomeFunction(); // innerRefClosure now holds a reference to innerFunction

//Now you play with inner function and enclosed variable
innerRefClosure(); // Output: "I am enclosed inside function!"
