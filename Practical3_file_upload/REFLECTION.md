# Reflection - Practical 3: File Upload (Backend)

## a) Documentation - Main Concepts Applied

### Express.js Server
I have made a backend server using Express.js which is the backend framewoke that runs on node.js 
which is the server. It listens on port 8000 and handles incoming requests from the frontend.
Without this server, there would be nowhere to send the uploaded files.

### Multer
Multer is a middleware for Express that handles file uploads. It does
three main things:
- Saves the file to the uploads/ folder on the server
- Checks the file type and rejects anything that is not JPEG, PNG, or PDF
- Rejects files that are larger than 5MB

### CORS
CORS stands for Cross-Origin Resource Sharing. Since the frontend runs
on port 3000 and the backend runs on port 8000, the browser would normally
block requests between them for security reasons. Adding the cors middleware
tells the server to allow requests coming from the frontend.

### Environment Variables
I used a .env file to store the port number and frontend URL. This is a
good practice because it means you can change these values without editing
the actual code.

### Error Handling
I added error handling middleware at the bottom of server.js. This catches
errors from Multer like file too large or wrong file type and sends back
a clear error message to the frontend instead of crashing the server.

---

## b) Reflection

### What I Learned

Before this practical I had never built a backend server before. I learned
that the frontend and backend are two separate applications that communicate
with each other through API routes.

I learned what Multer does and why it is needed. Without it, Express cannot
read files from a form submission on its own.

I also learned why CORS is important. At first it seems confusing but it
makes sense once you understand that the browser treats different ports as
different origins and blocks them from talking to each other by default.

### Challenges I Faced

**Challenge 1 - Running two servers at the same time**
I was used to only running one server with npm run dev. For this practical
I had to run the Express backend and the Next.js frontend at the same time
in two separate terminals.

How I overcame it: I opened two terminal windows and ran node server.js
in one and npm run dev in the other.

**Challenge 2 - Connecting the frontend to the backend**
The frontend was originally sending uploads to its own Next.js API route.
I had to update the URL in page.js to point to the Express server instead.

How I overcame it: I used Ctrl+F in VS Code to search for axios.post and
changed the URL from /api/upload to http://localhost:8000/api/upload.

**Challenge 3 - Understanding middleware**
At first I did not understand what middleware meant or why there were so
many app.use() lines in server.js.

How I overcame it: I read through each line carefully and learned that
middleware are just functions that run before your route handles the
request, like checking CORS or logging requests with morgan.