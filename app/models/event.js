const mongoose = require('mongoose');

// Schema defines how chat messages will be stored in MongoDB
const EventSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('Event', EventSchema);
