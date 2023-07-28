function avenger(name, age) {
  this.name = name;
  this.age = age;
  this.usePower = function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  };
}

const ironMan = new Person("Iron Man", 30);

// 01:Accessing object properties using dot notation
console.log(ironMan.name); // Output: 'Alice'
console.log(ironMan.age); // Output: 30

// 02:Accessing object properties using bracket notation
console.log(ironMan["name"]); // Output: 'Alice'
console.log(ironMan["age"]); // Output: 30

// 03:Accessing object method
ironMan.usePower(); // Output: 'Hello, my name is Alice and I am 30 years old.'
