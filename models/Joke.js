const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'General',
  },
  type: {
    type: String,
    enum: ['single', 'twopart'],
    default: 'single',
  },
  setup: {
    type: String,
  },
  delivery: {
    type: String,
  },
  flags: {
    nsfw: { type: Boolean, default: false },
    religious: { type: Boolean, default: false },
    political: { type: Boolean, default: false },
    racist: { type: Boolean, default: false },
    sexist: { type: Boolean, default: false },
    explicit: { type: Boolean, default: false },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  imageUrl: {
    type: String,
  },
  source: {
    type: String,
    enum: ['user', 'api'],
    default: 'user',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Joke', jokeSchema);
