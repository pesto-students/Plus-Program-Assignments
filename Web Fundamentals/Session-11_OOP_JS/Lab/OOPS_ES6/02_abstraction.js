class Vehicle {
  #brand; // private property
  #model; // private property

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
  }

  // public method
  getBrand() {
    return this.#brand;
  }

  // public method
  getModel() {
    return this.#model;
  }

  // private method
  #startEngine() {
    console.log(`Starting engine for ${this.#brand} ${this.#model}`);
  }

  // public method
  drive() {
    this.#startEngine();
    console.log(`Driving ${this.#brand} ${this.#model}`);
  }
}

const car = new Vehicle("Ford", "Mustang");

console.log(car.getBrand()); // "Ford"
console.log(car.getModel()); // "Mustang"
// console.log(car.#brand); // "throws Error"
car.drive(); // "Starting engine for Ford Mustang" "Driving Ford Mustang"
