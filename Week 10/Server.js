var express = require("express");
let Books = require('./BooksSchema');
let mongodbConnected = require('./MongoDBConnect');
const cors = require('cors');
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(cors());

app.get('/', function(req, res) {
    res.send("Welcome to the Book API!");
});

app.get('/about', function(req, res) {
    Books.countDocuments().exec()
    .then(count => {
        console.log("Total documents Count before addition:", count);
        res.send(`Total documents Count before addition: ${count}`);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Error occurred while fetching document count');
    });
});

app.get('/allbooks1', async (req, res) => {
    try {
        const books = await Books.find();
        return res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while fetching books');
    }
});

app.get('/getbook/:id', function(req, res) {
    let id = req.params.id;
    Books.findById(id, function(err, book) {
        if (err) {
            console.error(err);
            return res.status(400).send('Error occurred while fetching book');
        }
        res.json(book);
    });
});

app.post('/addbooks', function(req, res) {
    let newbook = new Books(req.body);
    newbook.save()
        .then(() => {
            res.status(200).json({'books': 'book added successfully'});
        })
        .catch(err => {
            console.error(err);
            res.status(400).send('Adding new book failed');
        });
});

app.post('/updatebook/:id', function(req, res) {
    let id = req.params.id;
    let updatedbook = req.body;
    Books.findByIdAndUpdate(id, updatedbook, { new: true })
        .then(() => {
            res.status(200).json({'books': 'book updated successfully'});
        })
        .catch(err => {
            console.error(err);
            res.status(400).send('Updating book failed');
        });
});

app.post('/deleteBook/:id', function(req, res) {
    let id = req.params.id;
    Books.findByIdAndDelete(id)
        .then(() => {
            res.status(200).send('Book Deleted');
        })
        .catch(err => {
            console.error(err);
            res.status(400).send('Deleting book failed');
        });
});

app.listen(5500, function() {
    console.log("Server is running on port 5500");
});
