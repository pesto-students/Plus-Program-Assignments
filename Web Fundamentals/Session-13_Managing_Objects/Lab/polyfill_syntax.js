// Check if the `includes()` method already exists on the Array prototype
if (!Array.prototype.includes) {
  // Define the `includes()` method on the Array prototype
  Array.prototype.includes = function (searchElement /*, fromIndex*/) {
    // Implementation code here
  };
}
