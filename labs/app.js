// Import the express module
var express = require('express');
// Import the os module
var os = require("os");
// Get the hostname of the system
var hostname = os.hostname();
// Create an instance of the express application
var app = express();

// Define a route handler for the root URL
app.get('/', function(req, res) {
  // Send a response with a greeting message containing the hostname
  res.send('Hello world from ' + hostname + '! Your app is up and running!\n');
});

// Start the server and listen on port 8080
app.listen(8080, function() {
  console.log('Sample app is listening on port 8080.');
});
