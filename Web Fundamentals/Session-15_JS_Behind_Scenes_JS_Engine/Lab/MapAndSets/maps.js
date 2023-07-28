// Create a new Map
const myMap = new Map();

// Add a key-value pair to the map
myMap.set("key1", "value1");

// Get the value associated with a key
const value = myMap.get("key1");
console.log(value);
// Check if a key exists in the map
const hasKey = myMap.has("key1");
console.log(hasKey);

// Get the number of key-value pairs in the map
const size = myMap.size;
console.log(size);

// Remove a key-value pair from the map
myMap.delete("key1");

// Clear all key-value pairs from the map
myMap.clear();
