try {
  // code that might throw an error
} catch (error) {
  // code to handle the error
}

try {
  let num = 10 / 0; // dividing by 0 will throw an error
  console.log(num);
} catch (error) {
  console.log("An error occurred: " + error.message);
}
