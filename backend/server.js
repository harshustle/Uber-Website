// Import the built-in 'http' module to create an HTTP server.
const http = require('http');

// Import the 'app' module from the local './app' file, which contains the main application logic.
const app = require('./app');

// Set the port number for the server to listen on.
// Use the value from the environment variable 'PORT', or default to 3000 if not defined.
const port = process.env.PORT || 3000;

// Create an HTTP server instance and pass the 'app' module as the request listener.
const server = http.createServer(app);

// Start the server and make it listen on the specified port.
// When the server starts successfully, log a message to the console.
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
