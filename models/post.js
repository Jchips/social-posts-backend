'use strict';
const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: 'Untitled'
  },
  text: {
    type: String,
  },
  user: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

module.exports = mongoose.model('Post', postSchema);

