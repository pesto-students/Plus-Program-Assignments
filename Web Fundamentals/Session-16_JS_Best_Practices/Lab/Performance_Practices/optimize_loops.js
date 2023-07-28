var array = [1, 2, 3, 4, 5];

// Slow loop
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Faster loop
for (var i = 0, len = array.length; i < len; i++) {
  console.log(array[i]);
}
