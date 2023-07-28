function Avenger(name, power, weapon) {
  this.name = name;
  this.power = power;
  this.weapon = weapon;
}
Avenger.prototype.attack = function () {
  console.log(this.name + " attacks with " + this.weapon);
};
//Inherit properties
function Superhero(name, power, weapon, superpower) {
  Avenger.call(this, name, power, weapon);
  this.superpower = superpower;
}
//Inherit methods with proto chaining
Superhero.prototype = Object.create(Avenger.prototype);
Superhero.prototype.constructor = Superhero;

//Modify attack function to exhibit polymorphism
Superhero.prototype.attack = function () {
  console.log(this.name + " uses " + this.superpower + " to fight");
};

var ironMan = new Avenger("Iron Man", "Armor suit", "Repulsor rays");
var captainAmerica = new Superhero(
  "Captain America",
  "Super strength",
  "Vibranium shield",
  "Leadership"
);

ironMan.attack(); // "Iron Man attacks with Repulsor rays"
captainAmerica.attack(); // "Captain America uses Leadership to fight"
