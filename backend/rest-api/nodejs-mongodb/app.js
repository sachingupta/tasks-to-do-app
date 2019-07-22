const express = require('express');
const app = express();
const morgan = require('morgan');

const tasksRoutes = require('./api/routes/tasks');

// setup logging middleware using morgan
app.use(morgan('dev'));

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