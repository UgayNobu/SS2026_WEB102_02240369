# Reflection - Practical 2: TikTok REST API

## What I did
I have made a REST API backend of my tiktok clone using the Node.js and the Express.js. This has differnet API having different endpoints for users, videos and comments.

## Main Concepts 

### 1. REST API
My first time making REST API where I am larning how to use HTTP methods to many/different steps like:
- GET - to retrive data
- POST - to make new data
- PUT - to edit data
- DELETE - to remove data

### 2. Express.js
Using this Express.js i was able to make the server and handle all the routes of the pages. This Express.js was easier to use to connect URLs with functions.

### 3. MVC Structure
I also learned about the modole view structure:
- Models holds the data
- Controllers deals with the logic
- Routes show/define the paths

### 4. Middleware
It goes between the request and response is what i learned using:
- Morgan for logging requests
- CORS to allow the frontend to interact with the backend
- Body-parser to read the request data

### 5. In-Memory Data Storage
Since i am not using any database, i had to hold the datas in the variables where the data auto resets whenever the server is restarted.

## What I Learned
From this lab work i had lots to learn like how to use Node.js server, how to make api endpoints, how to arrange the codes using the folders like controlles/routes, after creating those , i learn to test API usig the curl to check if it is working or not, how to apply and where use the environment variables, and i leanred few common ideas about the status codes in HTTP like 200, 404, and 500.

## Challenges

### 1: 
I did understand the files paths using '../' but later i found out that the '../' is one folder up when going.


### 2: 
I did not know why my port 3000 was not working , it turns out that my port 3000 was already been used or runed in the frontend , so i had to use port 8000 in the .env file to run the backend of the server.


### 3:
Without the frontend , i did not know how to run or test the APIs but later i learned some of the curl commands in the terminal directly to test the functions of the API.


## HTTP Status Codes I Used
-200, meaing Ok ,to get the data success
-201, meaing done creating, to create new data 
-204, meaing no data, for deleted datas 
-400, wrong/weak request, for incomplete fields
-404, not found, for when data is not found 
-409, repeatation, when there is two smae datas 

## Conclusion
This lab or assigment made me learn thw work flow of APIs in the backend where i now know the connection between the frontend and backend. With this now i know that the frontend will be able to retrive real time data's not just the mock datas.