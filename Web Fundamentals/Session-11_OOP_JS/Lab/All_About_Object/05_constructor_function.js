// 01:Define a constructor function
function Avenger(name, age) {
  this.name = name;
  this.age = age;
  //   this keyword in a constructor function refers to the new instance of the object being created.
  //   This allows you to set properties and methods on the new object.

  // 02:Adding a Method to a Constructor
  this.replaceAvenger = function (name) {
    this.name = name;
  };
}

// 03:Create a new object using the constructor function
const ironMan = new Avenger("Iron Man", 30);

// 04:Access the properties of the object
console.log(ironMan.name); // Output: Alice
console.log(ironMan.age); // Output: 30
//05:Put a debug point and show person1 proto
