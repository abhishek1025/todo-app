import React from 'react';
import { Task } from '../Task/Task.component';

const Tasks = ({ tasks }) => {

    return (
        <div className='all-tasks'>
            {tasks && tasks.map((task, index) => {
                return (
                    <Task task={task} key={index} />
                )
            })}
        </div>
    )
}

export default Tasks