const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./startup/db');
const mongoose = require('mongoose');

//Middleware
app.use(cors());
app.use(express.json());

//Mongodb Connection String Here
connectDB();

//Import Routes Here
const authRoute = require('./routes/auth');

//Routes Middleware
app.use('/api/user', authRoute);


//Port Listener
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});