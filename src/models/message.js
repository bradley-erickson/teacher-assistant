const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    Author:{ type:String, required:true, trim: true, minlength:1 },
    classID:{ type:Number, required:true, trim: true, minlength:1 },
    text:{ type:String, required:true, minlength:1 }
});

const Message = mongoose.model('Message',messageSchema);

module.exports = Message;