const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

let UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'cannot be empty.'],
      lowercase: true,
      index: true
    },
    password: String,
    username: String,
    bio: String,
    image: String
  },
  { timestamps: true }
);

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.toAuthJSON = function() {
  return {
    username: this.username,
    email: this.email,
    image: this.image
  };
};
let User = mongoose.model('User', UserSchema);

module.exports = User;
