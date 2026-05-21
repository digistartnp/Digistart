const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  icon:    { type: String, default: '📝' },
  tag:     { type: String, required: true },
  title:   { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image:   { type: String, default: '' },       // path to uploaded file
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
