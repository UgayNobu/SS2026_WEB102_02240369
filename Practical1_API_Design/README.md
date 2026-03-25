# Practical 1 - Designing and Implementing RESTful API Endpoints

## Project Overview
This practical involves building a RESTful API for a social media platform using Node.js and Express.

## Resources
- Posts
- Users
- Comments
- Likes
- Followers

## Project Structure
social-media-api/
├── controllers/
│   ├── userController.js
│   ├── postController.js
│   ├── commentController.js
│   ├── likeController.js
│   └── followerController.js
├── middleware/
│   ├── async.js
│   ├── errorHandler.js
│   └── formatResponse.js
├── routes/
│   ├── users.js
│   ├── posts.js
│   ├── comments.js
│   ├── likes.js
│   └── followers.js
├── utils/
│   ├── mockData.js
│   └── errorResponse.js
├── public/
│   └── docs.html
├── .env
├── .gitignore
├── package.json
└── server.js

## Setup Instructions

1. Clone the repository
2. Install dependencies:
npm install

3. Set up .env file:
PORT=3000

4. Run the server:
npm run dev

## API Endpoints

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Get all users |
| GET | /users/:id | Get single user |
| POST | /users | Create user |
| PUT | /users/:id | Update user |
| DELETE | /users/:id | Delete user |

### Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /posts | Get all posts |
| GET | /posts/:id | Get single post |
| POST | /posts | Create post |
| PUT | /posts/:id | Update post |
| DELETE | /posts/:id | Delete post |

### Comments
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /comments | Get all comments |
| GET | /comments/:id | Get single comment |
| POST | /comments | Create comment |
| PUT | /comments/:id | Update comment |
| DELETE | /comments/:id | Delete comment |

### Likes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /likes | Get all likes |
| GET | /likes/:id | Get single like |
| POST | /likes | Create like |
| DELETE | /likes/:id | Delete like |

### Followers
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /followers | Get all followers |
| GET | /followers/:id | Get single follower |
| POST | /followers | Follow a user |
| DELETE | /followers/:id | Unfollow a user |

## Testing
Open browser and visit:
- http://localhost:3000
- http://localhost:3000/users
- http://localhost:3000/posts
- http://localhost:3000/comments
- http://localhost:3000/likes
- http://localhost:3000/followers
- http://localhost:3000/api-docs