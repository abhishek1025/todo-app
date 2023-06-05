import { createContext, useState } from "react";

export const TasksContext = createContext({
    tasks: null,
    setTasks: () => null
})

export const TasksContextProvider = ({ children }) => {

    const [allTasks, setAllTasks] = useState();
    const [tasksToDisplay, setTasksToDisplay] = useState();


    const value = { allTasks, setAllTasks, tasksToDisplay, setTasksToDisplay }

    return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}



