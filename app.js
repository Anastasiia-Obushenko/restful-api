const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Routes
app.get('/', (req, res) => {
    res.send("we are on home");
});


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log("connected to DB")
);

app.listen(3000);