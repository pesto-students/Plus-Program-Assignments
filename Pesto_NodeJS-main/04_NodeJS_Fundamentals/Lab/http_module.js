// Import the http module
const http = require('http');

// Define the hostname and port for the server
const hostname = 'localhost';
const port = 3000; // You can use any port you prefer

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response
  res.end('Hello, World!\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}/`);
});
