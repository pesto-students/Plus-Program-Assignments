// Import the fs module
const fs = require("fs");

// Read the contents of the file asynchronously
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Display the file contents
  console.log("File contents:");
  console.log(data);
});
