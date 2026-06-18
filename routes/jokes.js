const express = require('express');
const router = express.Router();
const Joke = require('../models/Joke');
const protect = require('../middleware/auth');
const { fetchJokesFromAPI, getCategories } = require('../services/jokeApiService');

// @route   GET /api/jokes
// @desc    Get all jokes for authenticated user
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const jokes = await Joke.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/jokes/:id
// @desc    Get a single joke by ID
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    
    if (!joke) {
      return res.status(404).json({ message: 'Joke not found' });
    }

    // Check if user owns the joke
    if (joke.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to access this joke' });
    }

    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/jokes
// @desc    Create a new joke
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { content, category, type, setup, delivery, flags, imageUrl } = req.body;

    const joke = await Joke.create({
      content,
      category: category || 'General',
      type: type || 'single',
      setup,
      delivery,
      flags: flags || {},
      imageUrl,
      user: req.user._id,
      source: 'user',
    });

    res.status(201).json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/jokes/:id
// @desc    Update a joke
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);

    if (!joke) {
      return res.status(404).json({ message: 'Joke not found' });
    }

    // Check if user owns the joke
    if (joke.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this joke' });
    }

    const { content, category, type, setup, delivery, flags, imageUrl } = req.body;

    joke.content = content || joke.content;
    joke.category = category || joke.category;
    joke.type = type || joke.type;
    joke.setup = setup || joke.setup;
    joke.delivery = delivery || joke.delivery;
    joke.flags = flags || joke.flags;
    joke.imageUrl = imageUrl || joke.imageUrl;

    const updatedJoke = await joke.save();
    res.json(updatedJoke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /api/jokes/:id
// @desc    Delete a joke
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);

    if (!joke) {
      return res.status(404).json({ message: 'Joke not found' });
    }

    // Check if user owns the joke
    if (joke.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this joke' });
    }

    await joke.deleteOne();
    res.json({ message: 'Joke deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/jokes/external/fetch
// @desc    Fetch jokes from external API and save them
// @access  Private
router.get('/external/fetch', protect, async (req, res) => {
  try {
    const { category = 'Any', amount = 5 } = req.query;
    const jokesData = await fetchJokesFromAPI(category, amount);

    const savedJokes = [];
    
    if (jokesData.jokes) {
      for (const jokeData of jokesData.jokes) {
        const joke = await Joke.create({
          content: jokeData.joke || jokeData.delivery,
          category: jokeData.category || 'General',
          type: jokeData.type || 'single',
          setup: jokeData.setup,
          delivery: jokeData.delivery,
          flags: jokeData.flags || {},
          user: req.user._id,
          source: 'api',
        });
        savedJokes.push(joke);
      }
    }

    res.status(201).json(savedJokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/jokes/external/categories
// @desc    Get available joke categories from external API
// @access  Private
router.get('/external/categories', protect, async (req, res) => {
  try {
    const categories = await getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
