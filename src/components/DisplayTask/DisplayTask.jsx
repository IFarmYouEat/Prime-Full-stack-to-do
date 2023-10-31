import DeleteTask from '../DeleteTask/DeleteTask.jsx';


function DisplayTask(props) {

    console.log(props.task.task, props.task.complete)

    const mother = (bool) => {
        if(bool === true){
            return 'complete';
        }else if(bool === false){
            return 'incomplete';
        }
    }


    return(
     <tr>
       <td>{props.task.task}</td> 
       <td>{props.task.priority}</td>
       <td>{mother(props.task.complete)}</td>
       <td><DeleteTask id={props.task.id} getTaskList={props.getTaskList}/></td>
     </tr>
   )
}

export default DisplayTask;