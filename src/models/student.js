const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fname:{ type:String, required:true, trim: true, minlength:1 },
    lname:{ type:String, required:true, trim: true, minlength:1 },
    
});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;