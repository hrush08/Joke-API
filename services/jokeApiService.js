const axios = require('axios');

const JOKE_API_URL = 'https://v2.jokeapi.dev/joke';

// Fetch jokes from external Joke API
const fetchJokesFromAPI = async (category = 'Any', amount = 10) => {
  try {
    const response = await axios.get(`${JOKE_API_URL}/${category}`, {
      params: {
        amount: amount,
        safeMode: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching jokes from API:', error.message);
    throw new Error('Failed to fetch jokes from external API');
  }
};

// Get available categories from Joke API
const getCategories = async () => {
  try {
    const response = await axios.get(`${JOKE_API_URL}/categories`);
    return response.data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    throw new Error('Failed to fetch categories');
  }
};

module.exports = {
  fetchJokesFromAPI,
  getCategories,
};
