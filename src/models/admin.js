const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    fname:{ type:String, required:true, trim: true, minlength:1 },
    lname:{ type:String, required:true, trim: true, minlength:1 },
    username:{ type:String, required:true, trim: true, minlength:1 },
    password:{ type:String, required:true, trim: true, minlength:1 }
});

const Admin = mongoose.model('Admin',adminSchema);

module.exports = Admin;