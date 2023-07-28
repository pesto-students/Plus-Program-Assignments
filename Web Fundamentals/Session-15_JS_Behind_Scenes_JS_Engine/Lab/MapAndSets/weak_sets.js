// Create a new WeakSet
const myWeakSet = new WeakSet();

// Create a value object
const value = {};

// Add a value to the WeakSet
myWeakSet.add(value);

// Check if a value exists in the WeakSet
const hasValue = myWeakSet.has(value);

// Remove a value from the WeakSet
myWeakSet.delete(value);
