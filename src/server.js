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

app.post('/login', function(req, res, next) {
    
    if(req.body.username && req.body.password){
        username = req.body.username;
        password = req.body.password;
        student.findOne({ username: username , password: password}, (err, student) => {
            if(student == null){
                console.log("no student");
            }
            else{
                return res.json({type:"student",info:student});
            }
        });
        teacher.findOne({ username: username , password: password}, (err, teacher) => {
            if(teacher == null){
                console.log("no teacher");
            }
            else{
                return res.json({type:"teacher",info:teacher});
            }
        });
        admin.findOne({ username: username , password: password}, (err, admin) => {
            if(admin == null){
                console.log("no admin");
            }
            else{
                return res.json({type:"admin",info:admin});
            }
        });
        
    }
});

app.post('/insertPerson', function(req, res, next) {
    let result = false;
    if(req.body.userID && req.body.type && req.body.fname,req.body.lname,req.body.uname,req.body.pwd){
        userId = req.body.userID;
        type = req.body.type;
        fname = req.body.fname;
        lname = req.body.lname;
        username = req.body.uname;
        password = req.body.pwd;
        
        switch(type) {
            case "student":
                let Student = new student({fname:fname,lname:lname,username:username,password:password});
                Student.save(function (err, Student) {
                    if (err) {
                        result = false;
                        return console.error(err);
                    }
                    else{
                        result = true;
                    }
                });
            break;
            case "teacher":
                let Teacher = new teacher({fname:fname,lname:lname,username:username,password:password});
                Teacher.save(function (err, Teacher) {
                    if (err) {
                        result = false;
                        return console.error(err);
                    }
                    else{
                        result = true;
                    }
                });
            break;
            case "admin":
                let Admin = new admin({fname:fname,lname:lname,username:username,password:password});
                Admin.save(function (err, Admin) {
                    if (err) {
                        result = false;
                        return console.error(err);
                    }
                    else{
                        result = true;
                    }
                });
            break;
            default:
            break;
        
        }
        
    }
    if(result){
            res.status(200).send({"result": true});
        }
        else{
            res.status(200).send({"result": false});
        }
    
});

app.post('/insertScore', function(req, res, next) {
    result = false;
    if(req.body.studentID && req.body.classID && req.body.attempts,req.body.correct,req.body.dateStamp){
        
        var studentID = req.body.studentID;
        var classID = req.body.classID;
        var attempts = req.body.attempts;
        var correct = req.body.correct;
        var dateStamp = req.body.dateStamp;
        
        let Score = new score({studentID: studentID, classID:classID,attempts:attempts,correct:correct,dateStamp:dateStamp});
        Score.save(function (err, Score) {
            if (err){
                result = false;
                return console.error(err);
            }
            else{
                result = true;
            }
        });
        if(result){
            res.status(200).send({"result": true});
        }
        else{
            res.status(200).send({"result": false});
        }
    }
});

app.post('/insertClass', function(req, res, next) {
    result = false;
    if(req.body.teacherID && req.body.name && req.body.subject,req.body.difficulty){
        
        var teacherID = req.body.teacherID;
        var name = req.body.name;
        var subject = req.body.subject;
        var difficulty = req.body.difficulty;
        
        let classT = new Class({teacherID: teacherID, name:name,subject:subject,difficulty:difficulty});
        classT.save(function (err, Score) {
            if (err){
                result = false;
                return console.error(err);
            }
            else{
                result = true;
            }
        });
        if(result){
            res.status(200).send({"result": true});
        }
        else{
            res.status(200).send({"result": false});
        }
    }
});

app.post('/insertObject', function(req, res, next) {
    result = false;
    if(req.body.object){
        
        var object = req.body.object;
        
        let Objects = new objects({object: object});
        Objects.save(function (err, Score) {
            if (err){
                result = false;
                return console.error(err);
            }
            else{
                result = true;
            }
        });
        if(result){
            res.status(200).send({"result": true});
        }
        else{
            res.status(200).send({"result": false});
        }
    }
});

app.post('/teacher', function(req, res, next) {
    teacher.find()
        .then(teachers => res.json(teachers))
        .catch(err => res.status(400).json('Error '+ err));
});

app.post('/student', function(req, res, next) {
    student.find()
        .then(students => res.json(students))
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