// app.js

// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route that responds with 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running at http://localhost:3001/');