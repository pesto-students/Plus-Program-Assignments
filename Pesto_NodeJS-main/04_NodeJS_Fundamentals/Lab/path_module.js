// Import the path module
const path = require("path");

// Two parts of a file path
const folderName = "documents";
const fileName = "file.txt";

// Join the parts to create a complete file path
const filePath = path.join(folderName, fileName);

// Display the complete file path
console.log("Complete File Path:", filePath);
