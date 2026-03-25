# Reflection - Practical 1

## a) Documentation - Main Concepts Applied

### RESTful API Design
I learned how to design API endpoints following REST principles.
Each resource has its own set of endpoints for listing, getting,
creating, updating and deleting data.

### HTTP Methods
I used different HTTP methods for different operations:
- GET - to retrieve data
- POST - to create new data
- PUT - to update existing data
- DELETE - to remove data

### HTTP Status Codes
I used proper status codes in responses:
- 200 - Success
- 201 - Created
- 400 - Bad Request
- 401 - Unauthorized
- 404 - Not Found
- 500 - Server Error

### Express Middleware
I created middleware for:
- Error handling (errorHandler.js)
- Async error catching (async.js)
- Content negotiation (formatResponse.js)

### Content Negotiation
The API can return responses in both JSON and XML format
depending on the Accept header sent by the client.

---

## b) Reflection

### What I Learned
- How to set up a Node.js and Express server from scratch
- How to structure an API project with controllers, routes and middleware
- How to handle errors properly using custom error classes
- How to use mock data to test an API without a database
- How REST principles work in a real project

### Challenges I Faced

#### Challenge 1 - package.json Error
When I first set up the project, I only pasted the scripts section
into package.json instead of the full file. This caused an
"End of file expected" error. I fixed it by replacing the entire
package.json with the correct complete content.

#### Challenge 2 - Missing Controller Files
When I ran the server I got an error saying
"Cannot find module '../controllers/commentController'".
This happened because I had not created the comment, like
and follower controller files yet. I fixed it by creating
all the missing controller files.

#### Challenge 3 - Mock Data Error
I got a "SyntaxError: Unexpected end of input" error in mockData.js
because I accidentally pasted a URL inside the file. I fixed it
by replacing the entire file with the correct code only.

#### Challenge 4 - .env File Location
My .env file was inside the utils folder instead of the root
folder. This caused issues with loading environment variables.
I fixed it by moving it to the root of the project.

### Conclusion
This practical helped me understand how a real REST API works.
I learned that proper project structure, error handling and
following REST principles are all important when building an API.