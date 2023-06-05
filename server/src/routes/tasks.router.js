const express = require('express');
const { httpGetAllTasks, httpAddTask, httpDeleteTask, httpUpdateTask } = require('./tasks.controller');

const tasksRouter = express.Router();

tasksRouter.get("/", httpGetAllTasks);
tasksRouter.post("/", httpAddTask);
tasksRouter.delete("/:taskID", httpDeleteTask);
tasksRouter.put("/", httpUpdateTask);


module.exports = tasksRouter;