const fs = require('fs');
const path = require("path");

const filePath = path.join(__dirname, '..', '..', 'data', 'data.json')

let tasks, latestTaskID;

function loadTasksData() {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        const dataFromJsonFile = JSON.parse(data.toString());
        tasks = dataFromJsonFile.tasks;
        latestTaskID = dataFromJsonFile.latestTaskID;
    });
}

function writeDataInJSONFile(data) {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

function getAllTasks() {
    return tasks;
}

function addTask(task) {

    tasks.push({ id: latestTaskID + 1, ...task });

    const data = { latestTaskID: latestTaskID + 1, tasks: tasks }

    writeDataInJSONFile(data)

    return true;
}

function deleteTask(taskID) {

    tasks = tasks.filter((task) => task.id !== Number(taskID));

    const data = { latestTaskID: latestTaskID, tasks: tasks }

    writeDataInJSONFile(data);

    return true;
}

function updateTask(updatedTask) {

    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id)

    //removing the existing task
    // tasks = tasks.filter((task) => task.id !== Number(updatedTask.id));

    //adding updated task
    // tasks.push(updatedTask);

    tasks[taskIndex] = updatedTask;

    const data = { latestTaskID: latestTaskID, tasks: tasks }

    // writeDataInJSONFile(data);

    return true;
}

module.exports = { loadTasksData, addTask, getAllTasks, deleteTask, updateTask };