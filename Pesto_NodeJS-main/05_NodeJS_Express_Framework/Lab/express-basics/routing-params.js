const express = require('express');
const app = express();
const PORT = 3000;

// Sample data for Avengers
let avengers = [
  { id: 1, name: 'Iron Man' },
  { id: 2, name: 'Captain America' },
  { id: 3, name: 'Thor' },
];

// Middleware to parse JSON data in request body
app.use(express.json());


// Get avenger by route param id
app.get('/avengers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const avenger = avengers.find(avenger => avenger.id === id);
  if (avenger) {
    res.json(avenger);
  } else {
    res.status(404).json({ error: 'Avenger not found' });
  }
});

// Get list of avengers by query params
app.get('/avengers', (req, res) => {
  // If the "name" query parameter exists, filter Avengers by name
  if (req.query.name) {
    const searchName = req.query.name.toLowerCase();
    const filteredAvengers = avengers.filter(avenger => avenger.name.toLowerCase().includes(searchName));
    if (filteredAvengers.length === 0) {
      res.status(404).json({ error: 'Avenger not found' });
    } else {
      res.json(filteredAvengers);
    }
  } else {
    // If no "name" query parameter, return all Avengers
    res.json(avengers);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
