const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#FF6B6B'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Category', categorySchema);
