# Reflection - Practical 2: TikTok REST API

## What I did
In this practical, I made a REST API backend for my tiktok clone using Node.js and Express.js.

I created different APIs with endpoints for users, videos and comments. At first it was bit confusing but later it started making sense slowly.

## Main Concepts 

### 1. REST API
This was my first time making a REST API so everything was kinda new for me.

I learned how HTTP methods work:
- GET - to retrive data  
- POST - to create new data  
- PUT - to update data  
- DELETE - to remove data  

Before this I didn’t really understand what these methods actually do 😅

### 2. Express.js
Using Express.js I was able to create the server and handle routes.

It was actually easier than I thought. I just connect URL with functions and it works, which is kinda cool.

### 3. MVC Structure
I learned about MVC structure (even tho I got confused at first):

- Models → store data  
- Controllers → handle logic  
- Routes → define paths  

After some time I understood why we separate things like this. It makes code less messy.

### 4. Middleware
Middleware was bit confusing at first.

I learned that it runs between request and response.

I used:
- Morgan → for logging requests  
- CORS → to allow frontend to talk with backend  
- body-parser → to read request data  

### 5. In-Memory Data Storage
I didn’t use any database in this practical.

So I stored data in variables. But problem is, data resets every time server restarts 😭

So yeah not good for real apps but ok for learning.

## What I Learned
From this practical I learned many things:

- how to create server using Node.js  
- how to make API endpoints  
- how to organize code using controllers and routes  
- how to test APIs using curl (this was new for me)  
- how to use environment variables  
- basic HTTP status codes like 200, 404, 500  

Before this I was just writing random code but now I understand bit more how backend works.

## Challenges

### 1:
At first I didn’t understand file paths using `../`

Later I found out it means going one folder up. Simple but confused me a lot in beginning.

### 2:
My port 3000 was not working and I didn’t know why.

Then I realized it was already being used by frontend. So I changed backend port to 8000 in `.env` file.

### 3:
Without frontend I didn’t know how to test APIs.

Later I learned some curl commands and tested APIs in terminal directly. That helped a lot.

## HTTP Status Codes I Used
- 200 → OK, when data is fetched successfully  
- 201 → created, when new data is added  
- 204 → no content, when data is deleted  
- 400 → bad request, when input is wrong  
- 404 → not found  
- 409 → conflict, when duplicate data  

## Conclusion
This practical helped me understand how backend APIs actually work.

Now I know how frontend and backend connect with each other. Before this I was just using fake data, but now I understand how real data can come from backend.