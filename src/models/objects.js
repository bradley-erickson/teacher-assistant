const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objectSchema = new Schema({
    object:{ type:String, required:true, trim: true, minlength:1 },
});

const Object = mongoose.model('Object',objectSchema);

module.exports = Object;