(function () {
  var myVar = "Hello private World";
  // This line logs "Hello private World"
  console.log(myVar);
})();

var myVar = "Hello Outside world";

console.log(myVar); // This line logs "Hello Outside world"
