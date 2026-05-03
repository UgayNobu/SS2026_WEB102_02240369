# Reflection - Practical 1: Connecting Backend to PostgreSQL

## a) Documentation

### Main Concepts Applied
- **PostgreSQL**: Used as the relational database to store student records.
- **Node.js & Express**: Used to create a backend REST API server.
- **pg (node-postgres)**: Used to connect Node.js to PostgreSQL without an ORM.
- **Connection Pooling**: Used `Pool` from the `pg` library to efficiently 
manage multiple database connections.
- **REST API**: Implemented GET and POST endpoints to interact with the database.
- **CORS**: Enabled Cross-Origin Resource Sharing to allow frontend access.
- **Parameterized Queries**: Used `$1, $2...` placeholders to prevent SQL injection.

---

## b) Reflection

### What I Learned
- How to connect a Node.js backend directly to PostgreSQL without using an ORM.
- How connection pooling works and why it is more efficient than single connections.
- How to create REST API endpoints that interact with a real database.
- How PostgreSQL handles errors like duplicate entries (error code `23505`).
- How to test APIs using both a browser and cURL commands.

### Challenges Faced

#### Challenge 1: Database and table already existed
When trying to create the database and table, I got errors saying they 
already existed from a previous session.

**How I overcame it:** I simply connected to the existing database using 
`\c student_records` and verified the data was already there using 
`SELECT * FROM students`.

#### Challenge 2: Duplicate email error on POST request
When testing the POST endpoint with `karma@example.com`, the API returned 
`{"error":"Email already exists"}`.

**How I overcame it:** I realized this was actually the correct behavior — 
the email field has a UNIQUE constraint. I used a different email 
(`kpema@example.com`) and the student was added successfully.