const express = require('express');
const app = express();
const PORT = 3000;

// Sample data for Avengers
let avengers = [
  { id: 1, name: 'Iron Man' },
  { id: 2, name: 'Captain America' },
  { id: 3, name: 'Thor' },
];

// Middleware to add a "power" property to Avenger in GET request
const addPowerToAvenger = (req, res, next) => {
  // Only add the "power" property in GET requests
  if (req.method === 'GET') {
    req.avenger = { ...req.avenger, power: 'Super Strength of '+ req.avenger.name };
  }
  next();
};

// Middleware to find Avenger by ID and attach to the request object
const findAvengerById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const avenger = avengers.find(avenger => avenger.id === id);
  if (avenger) {
    req.avenger = avenger;
    next();
  } else {
    res.status(404).json({ error: 'Avenger not found' });
  }
};

// Middleware to log the request method and URL
const logRequest = (req, res, next) => {
  console.log("logging "+ `[${req.method}] ${req.url}`);
  next();
};

// Register middlewares for all routes
app.use(logRequest);

// Custom middleware example: Get avenger by route param id with custom middleware
app.get('/avengers/:id', findAvengerById, (req, res) => {
  res.json(req.avenger);
});

// middleware chaining example, Get avenger by route param id and add power
app.get('/avengers/addpower/:id', findAvengerById, addPowerToAvenger, (req, res) => {
    res.json(req.avenger);
  });

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
