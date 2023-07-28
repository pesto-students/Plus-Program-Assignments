class Superhero extends Avenger {
  constructor(name, age, superpower, capeColor) {
    super(name, age, superpower);
    this.capeColor = capeColor;
  }

  fly() {
    console.log(`${this.name} is flying with a ${this.capeColor} cape!`);
  }
}

const superman = new Superhero("Clark Kent", 30, "Flight", "Red");

console.log(superman.capeColor); // "Red"
superman.fight(); // "Clark Kent is fighting!"
superman.fly(); // "Clark Kent is flying with a Red cape!"
