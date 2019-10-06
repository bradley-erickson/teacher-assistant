const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const router = express.Router();

const student = require('./models/student');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://root:12345678hey@teacherassistant-zmtpu.gcp.mongodb.net/CompuTutor?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

app.get('/data', function(req, res, next) {
    res.json([{id: 1, username:"Barett"},{id: 2, username:"Brad"}]);
});

var someone = new student({
    fname:'Johnny!',
    lname:'Apple',
    username:'Catz',
    password:'yoyo'
});

someone.save();



module.exports = app;