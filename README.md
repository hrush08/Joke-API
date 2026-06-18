<<<<<<< HEAD
# Joke Management System

A full-featured Joke Management System built with Node.js, Express, MongoDB, and JWT authentication. This system allows users to register, login, and manage their own collection of jokes with full CRUD operations. It also integrates with an external Joke API to fetch jokes automatically.

## Features

- **User Authentication**: Register and login with JWT-based authentication
- **Protected Routes**: All joke-related routes are protected with JWT middleware
- **CRUD Operations**: Complete Create, Read, Update, Delete operations for jokes
- **External API Integration**: Fetch jokes from the official Joke API (v2.jokeapi.dev)
- **MongoDB Storage**: All data stored securely in MongoDB
- **User-specific Data**: Each user can only access their own jokes
- **Category Support**: Organize jokes by categories
- **Two-part Jokes**: Support for both single-line and setup/delivery joke formats

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **External API**: JokeAPI (v2.jokeapi.dev)
- **HTTP Client**: Axios

## Project Structure

```
JokeAPI/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── models/
│   ├── User.js               # User model with password hashing
│   └── Joke.js               # Joke model with schema
├── middleware/
│   └── auth.js               # JWT authentication middleware
├── routes/
│   ├── auth.js               # Authentication routes (register, login)
│   └── jokes.js              # Joke CRUD routes
├── services/
│   └── jokeApiService.js     # External Joke API integration
├── utils/
│   └── generateToken.js      # JWT token generation utility
├── .env.example              # Environment variables template
├── .gitignore
├── package.json
├── server.js                 # Main server file
└── README.md
```

## Installation

1. **Clone the repository**
   ```bash
   cd "e:/Placement Training/JokeAPI"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update the following variables:
     ```env
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/jokeapi
     JWT_SECRET=your_jwt_secret_key_here_change_in_production
     JWT_EXPIRE=7d
     ```

4. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Default connection: `mongodb://localhost:27017/jokeapi`

5. **Run the server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication Routes

#### Register User
- **POST** `/api/auth/register`
- **Body**: 
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: User object with JWT token

#### Login User
- **POST** `/api/auth/login`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: User object with JWT token

### Joke Routes (Protected)

All joke routes require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

#### Get All User Jokes
- **GET** `/api/jokes`
- **Response**: Array of all jokes belonging to the authenticated user

#### Get Single Joke
- **GET** `/api/jokes/:id`
- **Response**: Single joke object

#### Create New Joke
- **POST** `/api/jokes`
- **Body**:
  ```json
  {
    "content": "Why did the chicken cross the road?",
    "category": "Animal",
    "type": "single",
    "setup": "Why did the chicken cross the road?",
    "delivery": "To get to the other side",
    "flags": {
      "nsfw": false,
      "religious": false
    }
  }
  ```
- **Response**: Created joke object

#### Update Joke
- **PUT** `/api/jokes/:id`
- **Body**: Same as create joke (all fields optional)
- **Response**: Updated joke object

#### Delete Joke
- **DELETE** `/api/jokes/:id`
- **Response**: Success message

#### Fetch Jokes from External API
- **GET** `/api/jokes/external/fetch?category=Any&amount=5`
- **Query Parameters**:
  - `category`: Joke category (default: "Any")
  - `amount`: Number of jokes to fetch (default: 5)
- **Response**: Array of fetched and saved jokes

#### Get Available Categories
- **GET** `/api/jokes/external/categories`
- **Response**: Array of available joke categories

## Usage Examples

### 1. Register a new user
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'
```

### 2. Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### 3. Create a joke (replace TOKEN with your JWT)
```bash
curl -X POST http://localhost:5000/api/jokes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"content":"Why don't scientists trust atoms? Because they make up everything!","category":"Science"}'
```

### 4. Get all jokes
```bash
curl -X GET http://localhost:5000/api/jokes \
  -H "Authorization: Bearer TOKEN"
```

### 5. Fetch jokes from external API
```bash
curl -X GET "http://localhost:5000/api/jokes/external/fetch?category=Programming&amount=3" \
  -H "Authorization: Bearer TOKEN"
```

## Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs before storage
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: All sensitive routes require valid JWT tokens
- **User Isolation**: Users can only access their own data
- **Environment Variables**: Sensitive configuration stored in environment variables

## Database Schema

### User Model
- `username`: String (unique, required)
- `email`: String (unique, required, lowercase)
- `password`: String (required, hashed)
- `createdAt`: Date (auto-generated)
- `updatedAt`: Date (auto-generated)

### Joke Model
- `content`: String (required)
- `category`: String (default: "General")
- `type`: String (enum: "single", "twopart", default: "single")
- `setup`: String (for two-part jokes)
- `delivery`: String (for two-part jokes)
- `flags`: Object (contains content flags)
- `user`: ObjectId (reference to User, required)
- `imageUrl`: String (optional, for image support)
- `source`: String (enum: "user", "api", default: "user")
- `createdAt`: Date (auto-generated)
- `updatedAt`: Date (auto-generated)

## Error Handling

The API includes comprehensive error handling:
- 400: Bad Request (invalid input)
- 401: Unauthorized (missing or invalid token)
- 403: Forbidden (accessing another user's data)
- 404: Not Found (resource doesn't exist)
- 500: Internal Server Error

## Future Enhancements

- Image upload functionality for jokes
- Joke rating and favorites system
- Social sharing features
- Advanced search and filtering
- User profile customization
- Joke comments and interactions

## License

ISC

## Author

Built as a placement training project
=======
# Joke-API
>>>>>>> c6b7c09d29fe7caf3402068470b156138719c271
