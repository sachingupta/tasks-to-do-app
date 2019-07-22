const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyeParser = require('body-parser');
const mongoose = require('mongoose');

const tasksRoutes = require('./api/routes/tasks');
const dbUrl = `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PW}@cluster0-xh2t1.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(dbUrl, { useNewUrlParser: true })
.then((client) => {
    console.log("connected");
})
.catch((error) => {
    console.log('Error getting db connection' + err);
});

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