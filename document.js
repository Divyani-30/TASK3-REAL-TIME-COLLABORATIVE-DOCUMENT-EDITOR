// models/Document.js
const mongoose = require('mongoose');
const DocumentSchema = new mongoose.Schema({
  content: String,
  updatedAt: Date,
});
module.exports = mongoose.model('Document', DocumentSchema);
