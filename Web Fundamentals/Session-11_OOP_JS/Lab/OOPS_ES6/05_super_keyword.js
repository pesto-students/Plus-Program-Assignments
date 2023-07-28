class Avenger {
  constructor(name, age, superpower) {
    this.name = name;
    this.age = age;
    this.superpower = superpower;
  }

  // We can define methods on the parent class
  fight() {
    console.log(`${this.name} is fighting!`);
  }
}

class IronMan extends Avenger {
  constructor(name, age, superpower, suitColor) {
    super(name, age, superpower); // We use super to call the parent class constructor
    this.suitColor = suitColor;
  }

  // We can override the fight method with additional behavior
  fight() {
    console.log(`${this.name} is fighting in a ${this.suitColor} suit!`);
    super.fight(); // We can call the parent class method using super
  }
}

const ironMan = new IronMan("Tony Stark", 40, "Powered suit", "Red and Gold");
ironMan.fight(); // "Tony Stark is fighting in a Red and Gold suit!" followed by "Tony Stark is fighting!"
