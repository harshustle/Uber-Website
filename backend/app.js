const dotenv = require("dotenv");                // Import the 'dotenv' module to manage environment variables.
dotenv.config();                                 // Load environment variables from a .env file into process.env.

const express = require("express");              // Import the 'express' module to create a web server.
const cors = require("cors");                    // Import 'cors' middleware to enable Cross-Origin Resource Sharing.

const app = express();                           // Create an instance of an Express application.

app.use(cors());                                 // Enable CORS for all routes in the application.

app.get("/", (req, res) => {                     // Define a GET route for the root URL ("/").
  res.send("Hello, this is the Uber API!");      // Send a response with a message to the client.
});

module.exports = app;                            // Export the 'app' instance to be used in other modules.
