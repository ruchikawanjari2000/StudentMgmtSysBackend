const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    firstName: {type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number},
    password:{type:String, required:true},
    role_id:{type:Number, required:true},
    status:{type:Number},
    created : {type:String} 
});

module.exports = mongoose.model('User', Schema);