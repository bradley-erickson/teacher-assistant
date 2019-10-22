const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const student = require('./models/student');
const teacher = require('./models/teacher');
const score = require('./models/score');
const objects = require('./models/objects');
const message = require('./models/message');
const Class = require('./models/class');
const classroom = require('./models/classroom');
const admin = require('./models/admin');

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

app.post('/student', function(req, res, next) {
    if(req.body.fname && req.body.lname){
        student.find({fname:req.body.fname, lname:req.body.lname})
            .then(students => res.json(students))
            .catch(err => res.status(400).json('Error '+ err));
    }
    else{
        student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error '+ err));
    }
});

app.get('/teacher', function(req, res, next) {
    teacher.find()
        .then(teachers => res.json(teachers))
        .catch(err => res.status(400).json('Error '+ err));
});

app.get('/score', function(req, res, next) {
    score.find()
        .then(scores => res.json(scores))
        .catch(err => res.status(400).json('Error '+ err));
});

app.get('/objects', function(req, res, next) {
    objects.find()
        .then(object => res.json(object))
        .catch(err => res.status(400).json('Error '+ err));
});

app.get('/classroom', function(req, res, next) {
    classroom.find()
        .then(classrooms => res.json(classrooms))
        .catch(err => res.status(400).json('Error '+ err));
});

app.get('/class', function(req, res, next) {
    Class.find()
        .then(classes => res.json(classes))
        .catch(err => res.status(400).json('Error '+ err));
});

app.get('/admin', function(req, res, next) {
    admin.find()
        .then(admins => res.json(admins))
        .catch(err => res.status(400).json('Error '+ err));
});



module.exports = app;