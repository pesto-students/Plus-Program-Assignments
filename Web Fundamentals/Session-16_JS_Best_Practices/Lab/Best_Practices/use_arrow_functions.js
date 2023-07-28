// Without arrow functions
var numbers = [1, 2, 3];
var doubled = numbers.map(function (number) {
  return number * 2;
});

// With arrow functions
var numbers = [1, 2, 3];
var doubled = numbers.map((number) => number * 2);
