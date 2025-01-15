//db.js
const mongoose = require('mongoose');

// Function to connect to MongoDB
function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('Connected to DB'))
        .catch(err => console.log('DB Connection Error:', err));
}

module.exports = connectToDb;                                               // Export the function for use in other parts of the application.
