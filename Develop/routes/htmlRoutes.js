const express = require('express');
const router = express.Router();
const path = require('path');
// This section of my code will get /notes and return the notes.html page.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
// This section of my code will get * - and return the index.html page.  
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
}); 

module.exports = router;
// This section of my code is used to export the router object from a file so that it can be imported and used in oter files. 