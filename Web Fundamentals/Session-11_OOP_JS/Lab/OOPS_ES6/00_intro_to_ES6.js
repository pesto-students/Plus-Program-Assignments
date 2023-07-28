class Avenger {
  // Constructor function that runs when a new object is created
  constructor(name, power, team) {
    this.name = name;
    this.power = power;
    this.team = team;
  }
  // Static property shared by all instances of the class
  static avengersCount = 6;

  // Method that returns a string describing the character
  characterDescription() {
    return `${this.name} is a member of the ${this.team} and has the power of ${this.power}.`;
  }

  // Getters and setters for the 'name' property
  get avengerName() {
    return this.name;
  }

  set avengerName(newName) {
    this.name = newName;
  }
}
// Creating a new instance of the Avenger class
const ironMan = new Avenger("Tony Stark", "Powered suit", "Avengers");
// Using a setter to change the 'name' property of the ironMan instance
ironMan.avengerName = "Iron Man";

// Calling the characterDescription method on the ironMan instance
console.log(ironMan.characterDescription()); // "Tony Stark is a member of the Avengers and has the power of Powered suit."

// Accessing the 'name' property of the ironMan instance using a getter
console.log(ironMan.avengerName); // "Iron Man"

class Avengers {
  static teamName = "Earth's Mightiest Heroes";

  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}

console.log(Avengers.teamName); // Output: "Earth's Mightiest Heroes"
