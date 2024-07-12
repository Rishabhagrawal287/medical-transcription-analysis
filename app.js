// app.js or server.js

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Use the middleware
app.use(loggerMiddleware);

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
