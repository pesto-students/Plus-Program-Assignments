function Avenger(name, power, weapon) {
  this.name = name;
  this.power = power;
  this.weapon = weapon;
}

function Superhero(name, power, weapon, superpower) {
  Avenger.call(this, name, power, weapon); // inherit properties from Avenger
  this.superpower = superpower; // add new property
}

Superhero.prototype = Object.create(Avenger.prototype); // inherit methods from Avenger
Superhero.prototype.constructor = Superhero; // set constructor back to Superhero

var captainAmerica = new Superhero(
  "Captain America",
  "Super strength",
  "Vibranium shield",
  "Leadership"
);

console.log(captainAmerica.power); // "Super strength", inherited from Avenger
console.log(captainAmerica.superpower); // "Leadership", new property for Superhero
