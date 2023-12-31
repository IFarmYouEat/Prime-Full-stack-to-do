import axios from 'axios';
import Button from '@mui/material/Button'
import './DeleteTask.css';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteTask(props){

    const deleteTask = () => {
        console.log('In Delete Task, User selected : ', props.id);
        axios.delete(`/todo/${props.id}`).then((response) => {
            props.getTaskList();
        }).catch((error) => {
            console.log('Error in deleteTask', error)
            alert(`Could not remove task`)
        })


    };

    return (
        <Button variant="contained" onClick={deleteTask}><DeleteIcon/></Button>
    )
};

export default DeleteTask;