import axios from 'axios';

function DeleteTask(props){

    const deleteTask = () => {
        console.log(props.id);
    };

    return (
        <button onClick={deleteTask}>Delete</button>
    )
};

export default DeleteTask;