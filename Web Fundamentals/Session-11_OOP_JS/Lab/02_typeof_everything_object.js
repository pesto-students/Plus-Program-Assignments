// Declare avenger function
function avenger(name, power) {
  this.name = name;
  this.power = power;
}

// Check data type of avenger function
console.log(typeof avenger); // Output: "function"

// Create object using avenger constructor function
const ironMan = new avenger("Iron Man", "Powered Suit");

// Check data type of ironMan object
console.log(typeof ironMan); // Output: "object"
