const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Import Route
const authRoute = require('./route/auth');

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to DB"));

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log("Server Started"));

//DB Connection 
//mongodb+srv://User11:<password>@hello.nclx8.mongodb.net/<dbname>?retryWrites=true&w=majority
