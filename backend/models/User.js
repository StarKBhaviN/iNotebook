const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
   name:{
    type : String,
    required : true
   },
   gender:{
    type : String,
    possibleValues : ['Male', 'Female']
   },
   email:{
    type : String,
    required : true,
    unique : true
   },
   contact:{
    type : String,
    required : true
   },
   bio:{
    type : String
   },
   password:{
    type : String,
    required : true
   },
   date:{
    type : Date,
    default: Date.now
   }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;