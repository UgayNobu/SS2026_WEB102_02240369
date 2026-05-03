# Practical 4 - TikTok Database with Prisma

## What is this project?
This is a practical where I connect my TikTok backend with PostgreSQL database.
Before this data was in memory but now it store in database so it not lost.

## What I built
- Create PostgreSQL database for TikTok app
- Setup Prisma ORM in backend
- Create schema for users, videos and comments
- Run migration to create tables
- Add authentication system (JWT + bcrypt)
- Update controllers to use database
- Test API using Postman
- Add seed data for testing

## Tools and Technologies Used
- **Node.js** - For backend server
- **Express.js** - For API
- **PostgreSQL** - For database
- **Prisma ORM** - To connect database
- **bcrypt** - For password hashing
- **jsonwebtoken (JWT)** - For authentication
- **Postman** - For API testing

## How to Run the Project

### Step 1: Go to server folder
```bash
cd server
Step 2: Install dependencies
npm install
Step 3: Setup environment variables

Create .env file and add database url and JWT secret

Step 4: Run Prisma migration
npx prisma migrate dev
Step 5: Generate Prisma client
npx prisma generate
Step 6: Start the server
npm run dev
Step 7: Test in Postman

Test register, login and protected routes using token

Result

Project is working fine. Database connected properly and data is saving correct.
Authentication also working but sometime small error come.