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
    firstName: String,
    lastName: String,
    bio: String,
    image: String,
    uuid: String
  },
  { timestamps: true }
);

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.toAuthJSON = function() {
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    image: this.image,
    bio: this.bio,
    uuid: this.uuid
  };
};
let User = mongoose.model('User', UserSchema);

module.exports = User;
