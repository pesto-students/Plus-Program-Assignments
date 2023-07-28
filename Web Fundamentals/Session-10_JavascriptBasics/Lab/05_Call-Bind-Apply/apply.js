var obj = { num: 2 };

var add = function (a, b) {
  return this.num + a + b;
};

var result = add.apply(obj, [3, 4]);
console.log(result); // Output: 9
