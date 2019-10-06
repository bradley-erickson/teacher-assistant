const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classroomSchema = new Schema({
    studentID:{ type:Number, required:true, trim: true, minlength:1 },
    classID:{ type:Number, required:true, trim: true, minlength:1 }
});

const Classroom = mongoose.model('Classroom',classroomSchema);

module.exports = Classroom;