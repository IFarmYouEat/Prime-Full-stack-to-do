import axios from 'axios';
import {useState} from 'react';
import Switch from '@mui/material/Switch';

function NewTask(props){

    let [taskInput, setTaskInput] = useState('');
 

    const addTask = () => {
        axios.post('/todo', {task: taskInput})
        .then((response) => {
            setTaskInput('');
           

            props.getTaskList();

        })
        .catch((error) => {
            alert('Could not add task');
            console.log('Could not add task', error);
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskInput){
            addTask();
        } else{
            alert("Tasks need a name to be added");
        }
    }


return(
    <div>
        <h3>Add New Task</h3>
        <form onSubmit={handleSubmit}>
            <lable>Task:</lable>
            <input
                type="text"
                value={taskInput}
                onChange={(evt) => setTaskInput(evt.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    </div>

)


}

export default NewTask;