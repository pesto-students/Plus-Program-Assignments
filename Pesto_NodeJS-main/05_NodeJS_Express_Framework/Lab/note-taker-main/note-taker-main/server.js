const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const db = require('./db/db.json')

//Allows all notes to have a unique ID
const { v4: uuidv4 } = require('uuid');

//Allows public folder to be unblocked
app.use(express.static('public'))
app.use(express.json())

//API Routes
// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        ///error logging
        if (err) throw err;
        let dbData = JSON.parse(data);
        //Returns new database
        res.json(dbData)
    });   
})

//POST 
///api/notes receives a new note to save on the request body and add it to db.json, then returns new note to the client.
app.post('/api/notes', (req, res) => {
    //grabs notes from body of request
    const newNote = req.body

    //gives each note a random ID
    newNote.id = uuidv4()

    //adds the note object to the array
    db.push(newNote)

    //update the json file with the new object
    fs.writeFileSync('./db/db.json', JSON.stringify(db))

    //responds with the note object used
    res.json(db)
})


//DELETE
// notes when the button is clicked by removing the note from db.json, saving and showing the updated database on the front end.
app.delete('/api/notes/:id', (req, res) => {
    const newDb = db.filter((note) =>
        note.id !== req.params.id)

    // update the db.json file to reflect the modified notes array
    fs.writeFileSync('./db/db.json', JSON.stringify(newDb))

    // send that removed note object back to user
    readFile.json(newDb)
})

//HTML Routes
//Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

//Wildcard Route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//App listens with front end on this port
app.listen(PORT, () =>
    console.log(`App listening on ${PORT}`))


    
// Route with query parameters
app.get('/search', (req, res) => {
  // Extract the query parameters from the request object
  const searchTerm = req.query.q;
  const filters = req.query.filters;
  
  // Process the search and filter the results accordingly
  // For demonstration purposes, we'll just send back the parameters as JSON.
  res.json({ searchTerm, filters });
});

// Example usage: http://localhost:3000/search?q=apple&filters=price_low,category_fruits

