// This line of code imports the Express framework
const express = require('express');
// This line of code provides an API for interacting with the file system
const fs = require('fs');
// This line of code will is the module that provides utilities for working with the file and directory paths.
const path = require('path');
// This line imports a custom middleware function clog.
const { clog } = require('./middleware/clog.js'); 

const app = express();

const PORT = process.env.PORT || 3001;
// This line of code uses the clog middleware for logging
app.use(clog);
// This section of code is my middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// This section of code will serve static files from the 'public' directory.
app.use(express.static('public'));

// This section of my code is my Routes
const apiRoutes = require('./routes/apiRoutes.js'); 
const htmlRoutes = require('./routes/htmlRoutes.js'); 

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// This section of code will start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
