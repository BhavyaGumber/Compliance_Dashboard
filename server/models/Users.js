const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: Number, required: true },
  password: { type: Number, required: true }
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
