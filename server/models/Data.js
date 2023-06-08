const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  team: { type: String, required: true },
  Strategy_Type: { type: String, required: true },
  Abbr: { type: String, required: true },
  Inst_Name: { type: String, required: true },
  Quantity: { type: String, required: true }
});

const dataSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  items: { type: [itemSchema], default: [] }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
