import { useContext, useState } from "react";

//Local imports
import "./TaskFrom.styles.scss";
import { addTask, fetchAllTasks, updateTask } from "../../utils/utils";
import { TasksContext } from "../../context/tasks.context";

const defaultValues = { title: '', dueDate: '', description: '' };

export const TaskForm = ({ setDisplayForm, operationType, task = defaultValues }) => {

    const { setAllTasks, setTasksToDisplay } = useContext(TasksContext);

    const [formFields, setFormFields] = useState(task);

    const changeHandler = (e) => {

        const { name, value } = e.target;

        return setFormFields({ ...formFields, [name]: value })
    }

    const submitHandler = async (e) => {

        e.preventDefault();

        if (operationType.toLowerCase() === "add") {

            const res = await addTask(formFields);

            if (res.status === 200) {
                alert("Task Added");
            } else {
                return alert("Unable to add the task")
            }

        } else {

            const res = await updateTask(formFields);

            if (res.status === 200) {
                alert("Task Details Updated");
                setFormFields(defaultValues);
            } else {
                return alert("Unable to update the task details");
            }
        }

        //Fetching data after completing the update and add operations
        const data = await fetchAllTasks();

        setAllTasks(data);
        setTasksToDisplay(data);

        return setDisplayForm(false);
    }


    return (

        <div className="task-form-wrapper">
            <div className="task-form">
                <div className="hide-form-btn">
                    <button onClick={() => setDisplayForm(false)}>
                        X
                    </button>
                </div>

                <form onSubmit={submitHandler}>
                    <div className="form-field">
                        <label>Title</label>
                        <input type="text" name="title" required onChange={changeHandler} value={formFields.title} />
                    </div>
                    <div className="form-field">
                        <label>Due Date</label>
                        <input type="date" name="dueDate" required onChange={changeHandler} value={formFields.dueDate} />
                    </div>

                    <div className="form-field">
                        <label>Description</label>
                        <textarea name="description" rows="5" required onChange={changeHandler} value={formFields.description}></textarea>
                    </div>

                    <div className="form-submit-btn">
                        <button type="submit">
                            {operationType}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
