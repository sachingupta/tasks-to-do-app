const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyeParser = require('body-parser');

const tasksRoutes = require('./api/routes/tasks');

// setup logging middleware using morgan
app.use(morgan('dev'));

// use body parser to parse request body
app.use(bodyeParser.urlencoded({extended: false}));
app.use(bodyeParser.json());

// Handling CORS
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', '*');
   if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
        return res.status(200).json({});
   }
   next();
});

// To setup middleware
app.use('/tasks', tasksRoutes);

// Handle error
app.use((req, res, next) => {
    const error = new Error('API not supported');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message: error.message
        }
    });
});

module.exports = app;