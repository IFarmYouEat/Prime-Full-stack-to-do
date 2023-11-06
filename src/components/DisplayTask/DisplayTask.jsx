import DeleteTask from '../DeleteTask/DeleteTask.jsx';
import MarkComplete from '../MarkComplete/MarkComplete.jsx';


function DisplayTask(props) {

    console.log(props.task.task, props.task.complete)

    const isComplete = (bool) => {
        if(bool === true){
            return 'Complete';
        }else if(bool === false){
            return 'Incomplete';
        }
    }

    return(
     <tr>
       <td>{props.task.task}</td> 
       <td>{isComplete(props.task.complete)}</td>
       <td><MarkComplete id={props.task.id} getTaskList={props.getTaskList}/></td>
       <td><DeleteTask id={props.task.id} getTaskList={props.getTaskList}/></td>
     </tr>
   )
}

export default DisplayTask;