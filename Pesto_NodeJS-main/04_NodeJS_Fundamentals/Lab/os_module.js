// Import the os module
const os = require("os");

// Get the OS platform
const platform = os.platform();

// Get the OS architecture
const architecture = os.arch();

// Get the total amount of free memory in bytes
const freeMemoryBytes = os.freemem();

// Convert bytes to megabytes
const freeMemoryMB = (freeMemoryBytes / (1024 * 1024)).toFixed(2);

// Display system information
console.log(`OS Platform: ${platform}`);
console.log(`Architecture: ${architecture}`);
console.log(`Free Memory: ${freeMemoryMB} MB`);
