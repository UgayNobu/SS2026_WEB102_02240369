# Practical 2 - TikTok REST API

## What is this project?
This is a REST API backend for the TikTok clone built in Practical 1.
It is built using Node.js and Express.js and handles videos, users, and comments.

## Tools and Technologies Used
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web server framework
- **Morgan** - HTTP request logger
- **CORS** - Allows frontend to communicate with backend
- **Body-parser** - Reads data sent in requests
- **Dotenv** - Loads environment variables
- **Nodemon** - Auto-restarts server on file changes

## How to Run the Project

### Step 1: Go to the server folder
```bash
cd Practical2_TikTok_Implementation/server
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Create .env file
```bash
PORT=8000
NODE_ENV=development
```

### Step 4: Start the server
```bash
npm run dev
```

### Step 5: Server is running at
```
http://localhost:8000
```

## API Endpoints

### Videos
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/videos | Get all videos |
| POST | /api/videos | Create new video |
| GET | /api/videos/:id | Get video by ID |
| PUT | /api/videos/:id | Update video |
| DELETE | /api/videos/:id | Delete video |
| GET | /api/videos/:id/comments | Get video comments |
| GET | /api/videos/:id/likes | Get video likes |
| POST | /api/videos/:id/likes | Like a video |
| DELETE | /api/videos/:id/likes | Unlike a video |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/users | Get all users |
| POST | /api/users | Create new user |
| GET | /api/users/:id | Get user by ID |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |
| GET | /api/users/:id/videos | Get user videos |
| GET | /api/users/:id/followers | Get user followers |
| POST | /api/users/:id/followers | Follow a user |
| DELETE | /api/users/:id/followers | Unfollow a user |

### Comments
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/comments | Get all comments |
| POST | /api/comments | Create new comment |
| GET | /api/comments/:id | Get comment by ID |
| PUT | /api/comments/:id | Update comment |
| DELETE | /api/comments/:id | Delete comment |
| POST | /api/comments/:id/likes | Like a comment |
| DELETE | /api/comments/:id/likes | Unlike a comment |

## Project Structure
```
server/
├── src/
│   ├── controllers/
│   │   ├── videoController.js
│   │   ├── userController.js
│   │   └── commentController.js
│   ├── routes/
│   │   ├── videos.js
│   │   ├── users.js
│   │   └── comments.js
│   ├── models/
│   │   └── index.js
│   ├── middleware/
│   ├── utils/
│   ├── app.js
│   └── index.js
├── .env
├── .gitignore
└── package.json
```

## Testing the API
You can test the API using curl commands:
```bash
# Get all users
curl -X GET http://localhost:8000/api/users

# Get all videos
curl -X GET http://localhost:8000/api/videos

# Get user by ID
curl -X GET http://localhost:8000/api/users/1

# Get video by ID
curl -X GET http://localhost:8000/api/videos/1

# Get user's videos
curl -X GET http://localhost:8000/api/users/1/videos

# Get video comments
curl -X GET http://localhost:8000/api/videos/1/comments
```