// func.bind(thisObj, arg1, arg2, ..., argN);
// func is a function that needs to be invoked with a different this object

// thisObj is an object or a value that needs to be replaced with the this keyword present inside the function func

// arg1, arg2…argN – you can pass 1 argument to the calling function or more than that, similar to the call function.

var obj = { num: 2 };

var add = function (a, b) {
  return this.num + a + b;
};

var boundAdd = add.bind(obj, 3, 4);
var result = boundAdd();
console.log(result); // Output: 9
