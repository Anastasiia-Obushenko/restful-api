const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send("we are on home");
});


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log("connected to DB")
);

app.listen(3000);