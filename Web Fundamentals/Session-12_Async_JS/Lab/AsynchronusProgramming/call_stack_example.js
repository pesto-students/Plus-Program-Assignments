function fun_1() {
  console.log("Function 1");
}
function fun_2() {
  console.log("Function 2");
}
function fun_3() {
  fun_1();
  console.log("Function 3");
  fun_2();
}

console.log("I am Globally available");
fun_3();
// Output Order: Put debug points and show
// I am Globally available
// Function 1
// Function 3
// Function 2
