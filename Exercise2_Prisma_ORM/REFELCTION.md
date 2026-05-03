# Reflection - Practical 2: Prisma ORM Backend for PostgreSQL  

## a) Documentation  

### Main Concepts Applied  

----
###
- **Prisma ORM: used this shit as middle layer between node js and postgreSQL so we dont have to write that annoying SQL crap all the time** -

- **Prisma Schema: defined data model in `schema.prisma`, this thing look confusing at first but later kinda ok** -

- **Prisma Introspection: used `npx prisma db pull` to auto generate schema from existing database, very lazy way but works lol** -

- **Prisma Client: used this instead of raw SQL, got easy functions so less headache** -

- **@@map(): used to map model `Student` with actual table `students`, weird but works somehow** -

- **REST API: implemented GET, GET by ID and POST endpoints using prisma queries** -

---

## b) Reflection  

### What I Learned  

----
###
- **prisma ORM make database stuff less painful compared to writing raw SQL queries which is annoying af** -

- **learned how to use `prisma db pull` to introspect database and generate schema automatically** -

- **prisma client give methods like `findMany()`, `findUnique()` and `create()` so no need write SQL manually** -

- **learned how to properly setup DATABASE_URL in `.env`, this part kinda confusing and irritating** -

- **difference between prisma and direct postgreSQL from practical 1, prisma is way easier and less headache** -

---

### Challenges Faced  

----
###
- **Prisma 7 compatibility issues: prisma 7 installed by default but this shit dont work with commonJS `require()` and server keep throwing `MODULE_NOT_FOUND` error again and again, very annoying** -

- **How I overcame it: uninstalled prisma 7 and installed prisma 5 which actually support commonJS and works properly** -

- **Wrong require path in prisma.js: at first used `require('./generated/prisma')` which is wrong for prisma 5 so again error came** -

- **How I overcame it: changed to `require('@prisma/client')` and finally everything started working fine** -