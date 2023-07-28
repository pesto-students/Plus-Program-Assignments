console.log("Before timeout");

setTimeout(() => {
  console.log("Inside timeout");
}, 1000);

console.log("After timeout");

let count = 0;

const intervalId = setInterval(() => {
  console.log(count);
  count++;
}, 1000);
