const { writeFile } = require("fs");
var greetings = require("./greetings.js");
const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is your name? ", (name) => {
  let msg = greetings.generateGreeting(name);
  writeFile("output.txt",msg, "utf8", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data Written Successfuly");
    }
  });
});
