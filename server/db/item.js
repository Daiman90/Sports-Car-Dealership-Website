const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  special: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  trans: {
    type: String,
    required: true
  },
  gas: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
