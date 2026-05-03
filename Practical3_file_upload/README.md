# Practical 3 - File Upload (Backend)

## What This Does

This is an Express.js backend server that receives files uploaded from the
React/Next.js frontend. It validates the file, saves it to an uploads folder,
and sends back a success response.

---

## Setup Instructions

### Step 1 - Create the project

mkdir file-upload-server
cd file-upload-server
npm init -y
npm install express cors multer morgan dotenv

### Step 2 - Create the .env file

Create a file called .env and add:

PORT=8000
FRONTEND_URL=http://localhost:3000

### Step 3 - Create server.js

Create server.js with the following sections:
- Express app setup
- CORS middleware to allow requests from the frontend
- Multer configuration for handling file uploads
- Upload API route at /api/upload
- Error handling middleware

### Step 4 - Update the frontend

In the Next.js project, open src/app/page.js and find the axios.post line.
Change the URL from:

/api/upload

To:

http://localhost:8000/api/upload

### Step 5 - Run both servers

Terminal 1 (backend):
node server.js

Terminal 2 (frontend):
npm run dev

---

## Project Structure

file-upload-server/
├── uploads/        ← uploaded files are saved here
├── server.js       ← main server file
├── .env            ← environment variables
└── package.json

---

## How to Test

1. Make sure both servers are running
2. Open http://localhost:3000
3. Upload a JPEG, PNG, or PDF file under 5MB
4. Check the uploads/ folder in file-upload-server
5. The file should be saved there with a timestamp in the name

To test validation:
- Upload a .txt file → should be rejected with an error
- Upload a file over 5MB → should be rejected with an error
- Upload without selecting a file → should show an error message

---

## Dependencies

- express: web server framework
- cors: allows the frontend to talk to the backend
- multer: handles file uploads
- morgan: logs incoming requests
- dotenv: loads environment variables from .env file