class SecretAgent extends Avenger {
  constructor(name, age, superpower, codeName) {
    super(name, age, superpower);
    this.codeName = codeName;
  }

  // We can hide the implementation details of the fight method
  fight() {
    console.log(`${this.codeName} is fighting!`);
  }

  // We can expose only the necessary properties
  getCodeName() {
    return this.codeName;
  }
}

const agentSmith = new SecretAgent(
  "John Smith",
  35,
  "Combat training",
  "Agent 007"
);

agentSmith.fight(); // "Agent 007 is fighting!"
console.log(agentSmith.getCodeName()); // "Agent 007"
