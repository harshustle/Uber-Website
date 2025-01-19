//user.model.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "first name must be a 3 character"],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, "last name must be a 3 character"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select:false,
  },
  socketId: {
    type: String,
    required: true,
    default: null 
  },
});


userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;
}

userSchema.methods.comparePasswords = async function(password){
  return await bcrypt.compareSync(password,this.password);
}

userSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10); // Generate salt
  return await bcrypt.hash(password, salt); // Hash the provided password
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;