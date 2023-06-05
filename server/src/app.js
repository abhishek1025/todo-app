const express = require('express');

const cors = require('cors');
const tasksRouter = require('./routes/tasks.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use('/tasks', tasksRouter)

module.exports = app;