const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jokes', require('./routes/jokes'));

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Joke API',
    endpoints: {
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login',
      },
      jokes: {
        getAll: 'GET /api/jokes',
        getById: 'GET /api/jokes/:id',
        create: 'POST /api/jokes',
        update: 'PUT /api/jokes/:id',
        delete: 'DELETE /api/jokes/:id',
        fetchFromAPI: 'GET /api/jokes/external/fetch',
        getCategories: 'GET /api/jokes/external/categories',
      },
    },
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
