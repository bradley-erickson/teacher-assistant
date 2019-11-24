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

app.post('/getMessages', function(req, res, next) {
    
    if(req.body.classID){
        let classID = req.body.classID;
        message.find({ classID: classID }, (err, messages) => {
            if(messages == null){
                console.log("no messages");
            }
            else{
                return res.json({messages:messages});
            }
        });
    }
    else{
        return false;
    }
});

app.post('/getStudents', function(req, res, next) {
    
    if(req.body.classID){
        let classID = req.body.classID;
        student.find({ classID: classID }, (err, students) => {
            if(students == null){
                console.log("no students");
            }
            else{
                return res.json({students:students});
            }
        });
    }
    else{
        return false;
    }
});

app.post('/getTeachers', function(req, res, next) {
    
    teacher.find((err, teachers) => {
        if(teachers == null){
            console.log("no teachers");
        }
        else{
            return res.json({teachers:teachers});
        }
    });
});

app.post('/getObjects', function(req, res, next) {
    
    objects.find((err, object) => {
        if(object == null){
            console.log("no objects");
        }
        else{
            return res.json({objects:object});
        }
    });
});

app.post('/getClass', function(req, res, next) {
    
    if(req.body.classID){
        let classID = req.body.classID;
        Class.findById(classID, (err, Classes) => {
            if(Classes == null){
                console.log("no Class with that ID");
            }
            else{
                return res.json({class:Classes});
            }
        });
    }
    else{
        return false;
    }
});

app.post('/getStudentScores', function(req, res, next) {
    
    if(req.body.studentID){
        let studentID = req.body.studentID;
        score.find({studentID:studentID}, (err, scores) => {
            if(scores == null){
                console.log("no scores for that student");
            }
            else{
                return res.json({scores:scores});
            }
        });
    }
    else{
        return false;
    }
});

app.post('/insertPerson', function(req, res, next) {
    let result = true;
    if(req.body.classID && req.body.type && req.body.fname,req.body.lname,req.body.uname,req.body.pwd){
        classID = req.body.classID;
        type = req.body.type;
        fname = req.body.fname;
        lname = req.body.lname;
        username = req.body.uname;
        password = req.body.pwd;
        
        switch(type) {
            case "student":
                let Student = new student({classID:classID,fname:fname,lname:lname,username:username,password:password});
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
    let result = true;
    if(req.body.studentID && req.body.classID && req.body.attempts && req.body.total && req.body.correct && req.body.dateStamp){
        
        var studentID = req.body.studentID;
        var classID = req.body.classID;
        var total = req.body.total;
        var correct = req.body.correct;
        var attempts = req.body.attempts;
        var dateStamp = req.body.dateStamp;
        
        let Score = new score({studentID: studentID, classID:classID, attempts:attempts, total:total,correct:correct,dateStamp:dateStamp});
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
    let result = true;
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
    let result = true;
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

app.post('/insertMessage', function(req, res, next) {
    let result = true;
    if(req.body.author && req.body.classID && req.body.text){
        
        let author = req.body.author;
        let classID = req.body.classID;
        let text = req.body.text;
        
        let Message = new message({author:author,classID:classID,text:text});

        Message.save(function (err, Score) {
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

module.exports = app;