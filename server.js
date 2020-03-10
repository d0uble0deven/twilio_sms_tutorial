// Require modeules
const express = require('express');
require('dotenv').config()

// Require Express app
const app = express();


// Configure app (app.set)

// Mount middleware (app.use)

// Mount root route
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});

// Mount other routes


// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
});