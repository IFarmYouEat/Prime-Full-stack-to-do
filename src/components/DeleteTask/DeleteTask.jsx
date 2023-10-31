import axios from 'axios';
import Button from '@mui/material/Button'
import './DeleteTask.css';

function DeleteTask(props){

    const deleteTask = () => {
        console.log(props.id);
    };

    return (
        <Button variant="contained" onClick={deleteTask}>Delete</Button>
    )
};

export default DeleteTask;