# Practical 2: Building a Prisma ORM Backend for PostgreSQL

## Overview
This practical exercise guides you through creating a Node.js backend application 
using Prisma ORM to connect to an existing PostgreSQL database, and comparing it 
with the direct connection approach from Practical 1.

## Prerequisites
- PostgreSQL installed
- Node.js installed
- Completed Practical 1 (existing student_records database)

## Instructions

### Part 1: Project Setup

#### 1.1 Create a New Project Directory
```bash
mkdir prisma-connection
cd prisma-connection
npm init -y
```

#### 1.2 Install Required Dependencies
```bash
npm install express cors
npm install prisma@5 --save-dev
npm install @prisma/client@5
```

#### 1.3 Initialize Prisma
```bash
npx prisma init
```
This creates:
- `prisma/schema.prisma`
- `.env` file for environment variables

#### 1.4 Configure Database Connection
Update the `.env` file:

---

### Part 2: Creating the Prisma Schema

#### 2.1 Introspect the Existing Database
```bash
npx prisma db pull
```
This examines your database and generates the schema automatically.

#### 2.2 Review and Adjust the Generated Schema
Update `prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Student {
  id              Int       @id @default(autoincrement())
  name            String?   @db.VarChar(100)
  email           String?   @unique @db.VarChar(100)
  course          String?   @db.VarChar(100)
  enrollment_date DateTime? @db.Date

  @@map("students")
}
```

#### 2.3 Generate the Prisma Client
```bash
npx prisma generate
```

---

### Part 3: Building the Express Server

#### 3.1 Create prisma.js
```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;
```

#### 3.2 Create server.js
- Set up Express server with CORS middleware
- Used Prisma Client to fetch all students
- Used Prisma Client to fetch a student by ID
- Used Prisma Client to create a new student
- Run with:
```bash
node server.js
```

---

### Part 4: Testing the API

#### Browser
Navigate to:

http://localhost:5100/students

#### cURL - Fetch all students
```bash
curl http://localhost:5100/students
```

#### cURL - Add a new student
```bash
curl -X POST http://localhost:5100/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Karma Pema","email":"kpema@example.com","course":"Cloud Computing","enrollment_date":"2023-03-15"}'