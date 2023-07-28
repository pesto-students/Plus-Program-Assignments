// Define a polyfill for the Array.includes() method
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement /*, fromIndex*/) {
    // If the array is null or undefined, throw a TypeError
    if (this == null) {
      throw new TypeError(
        "Array.prototype.includes called on null or undefined"
      );
    }

    // Convert the array to an object and get its length
    var obj = Object(this);
    var len = obj.length >>> 0;

    // If the length is 0, return false
    if (len === 0) {
      return false;
    }

    // If the fromIndex is undefined, start at index 0
    var fromIndex = arguments.length > 1 ? arguments[1] >> 0 : 0;

    // If the fromIndex is greater than or equal to the length, return false
    if (fromIndex >= len) {
      return false;
    }

    // If the fromIndex is negative, start from the end of the array
    if (fromIndex < 0) {
      fromIndex = len + fromIndex;
      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }

    // Iterate over each element in the array
    for (var i = fromIndex; i < len; i++) {
      // If the current element matches the search element, return true
      if (obj[i] === searchElement) {
        return true;
      }
    }

    // If the search element was not found, return false
    return false;
  };
}
