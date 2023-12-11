const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dbFilePath = path.join(__dirname, '../Develop/db/db.json');

//This section of my code will get api/notes and retrieve all the notes
router.get(' /notes', (req, res) => {
    //This section will read data from db.json and send it as a reponse 
    fs.readFile(dbFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(JSON.parse(data));
    });
});

