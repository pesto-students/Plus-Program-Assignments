const numbers = [1, 2, 3, 4, 5];

// Without functional programming
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}

// With functional programming
// const sum = numbers
//   .filter((number) => number % 2 === 0)
//   .reduce((acc, val) => acc + val, 0);
