class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog("Rufus");
dog.speak(); // Output: Rufus barks.

//Prototypal
// let animal = {
//   name: "Animal",
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   },
// };

// let dog = Object.create(animal);
// dog.name = "Rufus";
// dog.speak(); // Output: Rufus makes a noise.
