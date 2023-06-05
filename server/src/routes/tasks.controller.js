const { getAllTasks, addTask, deleteTask, updateTask } = require("../models/tasks.model");

function httpGetAllTasks(req, res) {
    return res.status(200).json(getAllTasks());
}

function httpAddTask(req, res) {
    const task = req.body;

    console.log(task);

    if ((task.title || task.dueDate || task.description) && addTask(task)) {
        return res.status(200).json({ "msg": "task added" })
    }

    return res.status(404).json({ "error": "Incompete Data" });
}


function httpDeleteTask(req, res) {

    const taskID = req.params.taskID;


    if (taskID && deleteTask(taskID)) {
        return res.status(200).json({ "msg": "task deleted" })
    }

    return res.status(404).json({ "error": "Unable to delete the task" });
}

function httpUpdateTask(req, res) {
    const task = req.body;

    if (task.id && updateTask(task)) {
        return res.status(200).json({ "msg": "task is updated" });
    }

    return res.status(400).json({ "error": "Unable to update the task" });
}

module.exports = { httpGetAllTasks, httpAddTask, httpDeleteTask, httpUpdateTask };