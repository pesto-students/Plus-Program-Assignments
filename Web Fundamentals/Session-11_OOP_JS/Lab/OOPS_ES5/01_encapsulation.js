// Encapsulation is one of the core concepts in object-oriented programming
// and describes the bundling of data and methods operating on this data into one unit.

function Avenger(name, power, weapon) {
  this.name = name;
  this.power = power;
  this.weapon = weapon;
}

var ironMan = new Avenger("Iron Man", "Armor suit", "Repulsor rays");
