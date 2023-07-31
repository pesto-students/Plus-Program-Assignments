// Import the events module
const { EventEmitter } = require("events");

// Create a new instance of the EventEmitter
const eventEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
eventEmitter.emit("greet", "John");
