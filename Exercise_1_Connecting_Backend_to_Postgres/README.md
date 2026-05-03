# Practical 1: Connecting Backend to PostgreSQL

## Overview
This practical exercise guides you through connecting a Node.js backend 
application to a PostgreSQL database without using an ORM.

## Prerequisites
- PostgreSQL installed
- Node.js installed

## Instructions

### Part 1: Database Setup

#### 1.1 Start PostgreSQL Service
```bash
pg_isready
brew services list
brew services start postgresql
```

#### 1.2 Access PostgreSQL and Create the Database
```bash
psql postgres
```
```sql
CREATE DATABASE student_records;
\c student_records
```

#### Create the students table
```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  course VARCHAR(100),
  enrollment_date DATE
);
```

#### Add sample data
```sql
INSERT INTO students (name, email, course, enrollment_date)
VALUES
  ('Sonam Dorji', 'sonam@example.com', 'Web Development', '2023-01-15'),
  ('Tashi Dema', 'tashi@example.com', 'Data Science', '2023-02-10'),
  ('Sonam Dema', 'dema@example.com', 'Mobile App Development', '2023-01-20'),
  ('Karma Dorji', 'karma@example.com', 'Mobile App Development', '2023-01-20');
```

#### Verify data
```sql
SELECT * FROM students;
```

---

### Part 2: Backend Setup

#### 2.1 Create Project
```bash
mkdir db-connection
cd db-connection
npm init -y
npm install express pg cors
```

#### 2.2 Create db-test.js
- Created a connection pool using `pg`
- Tested the connection by querying all students
- Run with:
```bash
node db-test.js
```

#### 2.3 Create server.js
- Set up Express server with CORS middleware
- Created PostgreSQL connection pool
- Added GET `/api/students` endpoint to fetch all students
- Added POST `/api/students` endpoint to add a new student
- Run with:
```bash
node server.js
```

---

### Part 3: Testing the API

#### Browser
Navigate to:
```
http://localhost:5000/api/students
```

#### cURL - Fetch all students
```bash
curl http://localhost:5000/api/students
```

#### cURL - Add a new student
```bash
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Karma Pema","email":"kpema@example.com","course":"Cloud Computing","enrollment_date":"2023-03-15"}'
```