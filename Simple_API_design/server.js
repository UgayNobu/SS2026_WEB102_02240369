// Import the built-in HTTP module to create a server
const http = require('http');

// A sample array to store student data
// Consider this as a database for now
const students = [
  { id: 1, name: "Karma", age: 22 },
  { id: 2, name: "Pema", age: 24 },
  { id: 3, name: "Sonam", age: 21 }
];

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  // GET /
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to our API');
  }

  // GET /students (get all students)
  else if (req.method === 'GET' && req.url === '/students') {
    res.writeHead(200);
    res.end(JSON.stringify(students));
  }

  // GET /students/:id (get single student)
  else if (req.method === 'GET' && req.url.startsWith('/students/')) {

    // Extract ID from URL
    const id = parseInt(req.url.split('/')[2]);

    // Find student with matching ID
    const student = students.find(s => s.id === id);

    if (student) {
      res.writeHead(200);
      res.end(JSON.stringify(student));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Student not found" }));
    }
  }

  // Route not found
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});