const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dbFilePath = path.join(__dirname, '../db/db.json');

// This section of my code will get api/notes and retrieve all the notes
router.get('/notes', (req, res) => {
  // This section will read data from db.json and send it as a response
  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(JSON.parse(data));
  });
});

// This section of my code will create a new note.
router.post('/notes', (req, res) => {
  // This section of my code will read existing notes from db.json
  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const notes = JSON.parse(data);
    const newNote = req.body; // Assuming newNote is coming from the request body
    newNote.id = Date.now();
    notes.push(newNote);

    // This section of my code will update the notes back to db.json
    fs.writeFile(dbFilePath, JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.json(newNote);
    });
  });
});

module.exports = router;
// This section of my code is used to export the router object from a file so that it can be imported and used in other files.
