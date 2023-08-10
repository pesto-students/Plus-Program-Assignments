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

// Get list of avengers
app.get('/avengers', (req, res) => {
  res.json(avengers);
});



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

// Create a new avenger
app.post('/avengers', (req, res) => {
  const newAvenger = req.body;
  avengers.push(newAvenger);
  res.status(201).json(newAvenger);
});

// Update an existing avenger
app.put('/avengers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedAvenger = req.body;
  avengers = avengers.map(avenger => {
    if (avenger.id === id) {
      return { ...avenger, ...updatedAvenger };
    }
    return avenger;
  });
  res.json(updatedAvenger);
});

// Delete an avenger
app.delete('/avengers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  avengers = avengers.filter(avenger => avenger.id !== id);
  res.sendStatus(204); // 204 No Content status, as there is no response body for successful delete
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
