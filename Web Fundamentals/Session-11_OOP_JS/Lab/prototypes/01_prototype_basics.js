// Create a constructor function for an Avenger
function Avenger(name, power) {
  this.name = name;
  this.power = power;
}

// Add a method to the Avenger prototype
Avenger.prototype.usePower = function () {
  console.log(this.name + " uses " + this.power + "!");
};

// Create an instance of the Avenger object
var ironMan = new Avenger("Iron Man", "repulsor beams");

// Call the usePower() method on the ironMan object
ironMan.usePower(); // Output: "Iron Man uses repulsor beams!"

// Replace the Avenger prototype with a new object
Avenger.prototype = {
  attack: function () {
    console.log(this.name + " attacks with " + this.power + "!");
  },
};

// Create a new instance of the Avenger object
var thor = new Avenger("Thor", "Mjolnir");

// Call the attack() method on the thor object
thor.attack(); // Output: "Thor attacks with Mjolnir!"
