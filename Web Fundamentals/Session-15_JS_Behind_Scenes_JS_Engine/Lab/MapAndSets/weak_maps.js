// Create a new WeakMap
const myWeakMap = new WeakMap();

// Create a key object
const key = {};

// Add a key-value pair to the WeakMap
myWeakMap.set(key, "value1");

// Get the value associated with a key
const value = myWeakMap.get(key);

// Check if a key exists in the WeakMap
const hasKey = myWeakMap.has(key);

// Remove a key-value pair from the WeakMap
myWeakMap.delete(key);

// Note that because the key in a WeakMap is weakly held,
// you cannot use a primitive value like a string or number as a key.
