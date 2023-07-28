// Parent constructor
function Animal(name) {
  this.name = name;
}

// Parent method
Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

// Child constructor
function Cat(name, color) {
  // Call the parent constructor with the current `this` object and the `name` argument
  Animal.call(this, name);
  this.color = color;
}

// Set up prototype chain
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// Child method
Cat.prototype.meow = function () {
  console.log("Meow, my name is " + this.name + " and I am " + this.color);
};

// Create instances of parent and child
var animal = new Animal("George");
var cat = new Cat("Whiskers", "orange");

// Call parent and child methods
animal.sayHello(); // Hello, my name is George
cat.sayHello(); // Hello, my name is Whiskers
// Important: Put a debug point and show prototypal chaining of 'cat' in variables panel
cat.meow(); // Meow, my name is Whiskers and I am orange
