const http = require('http');
const app = require('./app');
const { loadTasksData } = require('./models/tasks.model');

const server = http.createServer(app);

function startServer() {

    loadTasksData();

    server.listen(8000, () => {
        console.log("Server Runing at PORT 8000")
    })
}

startServer();

