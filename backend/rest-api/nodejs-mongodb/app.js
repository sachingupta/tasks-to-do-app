const express = require('express');
const app = express();

const tasksRoutes = require('./api/routes/tasks');

// To setup middleware
app.use('/tasks', tasksRoutes);

module.exports = app;