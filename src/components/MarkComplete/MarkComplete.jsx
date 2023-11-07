import axios from 'axios';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';



function MarkComplete(props){

    const markComplete = () => {
        console.log('In Mark Complete, User selected:', props.id);
        axios.put(`/todo/${props.id}`).then((response) => {
            props.getTaskList();
        }).catch((error) => {
            console.log('Error in MarkComplete', error)
            alert('Unable to mark complete')
        })
    };


    return(
        <Button variant="contained" onClick={markComplete}><CheckIcon/></Button>
    )
}

export default MarkComplete;