// This line of code imports the Express framework
const express = require('express');
// This line of code provides an API for interacting with the file system
const fs = require('fs');
// This line of code will is the module that provides utilities for working with the file and directory paths.
const path = require('path');
// This line imports a custom middleware function clog.
const { clog } = require('Develop/middleware/clog.js');

const app = express();

const PORT = process.env.PORT || 3001;
// This line of code uses the clog middleware for logging
app.use(clog);