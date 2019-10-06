const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    studentID:{ type:Number, required:true, trim: true, minlength:1 },
    classID:{ type:Number, required:true, trim: true, minlength:1 },
    attempts:{ type:Number, required:true, trim: true, minlength:1 },
    correct:{ type:Number, required:true, trim: true, minlength:1 },
    dateStamp:{ type:Date, Default: Date.now, required:true, trim: true, minlength:1 }
});

const Score = mongoose.model('Score',scoreSchema);

module.exports = Score;