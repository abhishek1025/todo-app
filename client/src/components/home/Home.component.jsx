import { useContext, useEffect, useState } from "react";

//Local imports
import "./Home.styles.scss";
import { TaskForm } from "../Form/TaskForm.component";
import Tasks from "../Tasks/Tasks.component";
import { TasksContext } from "../../context/tasks.context";
import { fetchAllTasks } from "../../utils/utils";

export const Home = () => {

    const { allTasks, setAllTasks, tasksToDisplay, setTasksToDisplay } = useContext(TasksContext);

    const [searchText, setSearchText] = useState();

    const [displayForm, setDisplayForm] = useState(false);

    useEffect(() => {
        const setDataInContext = async () => {
            const data = await fetchAllTasks();
            setAllTasks(data);
            setTasksToDisplay(data);
        }

        setDataInContext()

    }, [setAllTasks, setTasksToDisplay])

    useEffect(() => {
        if (allTasks) {
            setTasksToDisplay(allTasks.filter((task) => task.title.toLowerCase().includes(searchText)));
        }
    }, [searchText])

    const getSearchText = (e) => {
        return setSearchText(e.target.value.toLowerCase());
    }

    return (
        <div className='home'>
            <div className="header-wrapper">
                <header>
                    <h2>Todo App</h2>
                    <form>
                        <input type="text" onChange={getSearchText} placeholder="Search Task.." />
                    </form>
                </header>
            </div>

            <div className="body">
                <h1>Tasks</h1>
                <div className="task-add-btn">
                    <button onClick={() => setDisplayForm(true)}>
                        <span>+</span> Add Task
                    </button>
                </div>

                {displayForm && <TaskForm operationType="Add" setDisplayForm={setDisplayForm} />}

                {
                    tasksToDisplay && <Tasks tasks={tasksToDisplay} />
                }

            </div>
        </div>
    )
}
