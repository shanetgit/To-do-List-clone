import React,{useState} from 'react';

const AddTaskForm = ()=>{
    // Implement your AddTaskForm component logic here
    const[taskTitle ,setTaskTitle] = useState('');

    const handleAddTask = ()=>{
        //implement the logic to add a new task
    };
    return (
        <div>
            <input
            type="text"
            placeholder="Add a new task"
            value={taskTitle}
            onChange={(e)=>setTaskTitle(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>

    );

};
export default AddTaskForm;