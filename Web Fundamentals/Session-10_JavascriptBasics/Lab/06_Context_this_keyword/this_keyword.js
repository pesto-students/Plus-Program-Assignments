//Global Context
console.log(this); // prints window (in browser)

//Function Context
function test() {
  console.log(this);
}
test(); // prints window (in browser)

//Object Context
const obj = {
  method() {
    console.log(this);
  },
};
obj.method(); // prints obj

// "this" in Event Handlers
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this);
}); // prints <button>

// "this" in Arrow functions
const objArrow = {
  method() {
    const arrow = () => console.log(this);
    arrow();
  },
};
objArrow.method(); // prints obj

// "this" in strict mode
("use strict");
function test() {
  console.log(this);
}
test(); // prints undefined
