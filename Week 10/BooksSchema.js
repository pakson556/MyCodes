const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
    booktitle: String,
    author: String,
    PubYear: Number,
    Topic: String,
    formate: String
});

// Creates Books model
const Books = mongoose.model('Books', bookSchema);

// Export model
module.exports = Books;
