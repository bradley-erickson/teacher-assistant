const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    teacherID:{ type:Number, trim: true, minlength:1 },
    name:{ type:String, required:true, trim: true, minlength:1 },
    subject:{ type:String, required:true, trim: true, minlength:1 },
    difficulty:{ type:String, required:true, trim: true, minlength:1 }
});

const Class = mongoose.model('Class',classSchema);

module.exports = Class;