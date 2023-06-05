import { useContext, useState } from 'react';

//local imports
import './Task.styles.scss';
import calenderIcon from '../../assests/calender-icon.png';
import deleteIcom from '../../assests/delete-icon.jpeg';
import editIcon from '../../assests/edit-icon.png';
import { TasksContext } from '../../context/tasks.context';
import { deleteTask, fetchAllTasks } from '../../utils/utils';
import { TaskForm } from '../Form/TaskForm.component';

export const Task = ({ task }) => {

    const { setAllTasks, setTasksToDisplay } = useContext(TasksContext);

    const [displayForm, setDisplayForm] = useState(false);

    const { id, title, dueDate, description } = task;

    const handleDeleteTaskOperation = async (id) => {

        const res = await deleteTask(id);

        if (res.status === 200) {
            alert("Task Deleted");

            const data = await fetchAllTasks();

            setAllTasks(data);

            return setTasksToDisplay(data);
        }

        return alert("Unable to Delete the task");
    }

    return (
        <>
            {displayForm && <TaskForm setDisplayForm={setDisplayForm} operationType="Update" task={task} />}

            <div className="task-card">
                <h2>{title}</h2>
                <p>{description}</p>

                <div className='task-card-icons'>
                    <div>
                        <img src={calenderIcon} height="25px" alt='date' /> {dueDate}
                    </div>

                    <div>
                        <button onClick={() => setDisplayForm(true)}>
                            <img src={editIcon} height="20px" alt='date' />
                        </button>

                        <button onClick={() => handleDeleteTaskOperation(id)}>
                            <img src={deleteIcom} height="20px" alt='date' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
