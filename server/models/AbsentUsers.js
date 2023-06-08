const mongoose = require('mongoose');

const absentUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true }
});

const AbsentUsers = mongoose.model('AbsentUsers', absentUserSchema);

module.exports = AbsentUsers;
