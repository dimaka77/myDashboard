const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

let userschema = new Schema({
  email: String,
  password: String,
  name: String
});

userschema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userschema.methods.validaPassword = password => {
  return bcrypt.compareSync(password, this.password);
};

let User = mongoose.model('User', userschema);

module.exports = User;
