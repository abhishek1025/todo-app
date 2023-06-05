export const fetchAllTasks = async () => {
    const res = await fetch("http://localhost:8000/tasks");
    const data = await res.json();
    return data;
}

export const addTask = async (data) => {

    const res = await fetch("http://localhost:8000/tasks", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(data),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json"
        }
    });

    return res;
}


export const updateTask = async (data) => {

    const res = await fetch("http://localhost:8000/tasks/", {

        // Adding method type
        method: "PUT",

        // Adding body or contents to send
        body: JSON.stringify(data),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json"
        }
    });

    return res;
}

export const deleteTask = async (id) => {

    const res = await fetch(`http://localhost:8000/tasks/${id}`, { method: "delete" })
    return res;
}
