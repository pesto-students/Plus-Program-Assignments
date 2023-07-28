class Animal {
  makeSound() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("The dog barks");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("The cat meows");
  }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.makeSound(); // "The animal makes a sound"
dog.makeSound(); // "The dog barks"
cat.makeSound(); // "The cat meows"
