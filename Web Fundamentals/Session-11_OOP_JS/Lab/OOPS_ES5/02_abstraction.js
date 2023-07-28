// Abstraction is the process of hiding the internal details of an application from the outer world.
function Avenger(name, power, weapon) {
  let secretPower = "Secret power"; // implementation detail, not visible outside

  this.name = name;
  this.power = power;
  this.weapon = weapon;

  this.getSecretPower = function () {
    return secretPower;
  };
}

var ironMan = new Avenger("Iron Man", "Armor suit", "Repulsor rays");

console.log(ironMan.secretPower); // undefined, cannot access implementation detail directly
console.log(ironMan.getSecretPower()); // "Secret power", implementation detail accessed through method
