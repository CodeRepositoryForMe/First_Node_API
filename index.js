const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Import Route
const authRoute = require('./route/auth');

// Connect to DB
mongoose.connect('mongodb+srv://User11:User11@hello.nclx8.mongodb.net/Test?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to DB"));

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log("Server Started"));

//DB Connection
//mongodb+srv://User11:<password>@hello.nclx8.mongodb.net/<dbname>?retryWrites=true&w=majority
