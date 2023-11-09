import DeleteTask from '../DeleteTask/DeleteTask.jsx';
import MarkComplete from '../MarkComplete/MarkComplete.jsx';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions'


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
     <Card>
        <Grid container alignItems="center" style={{ height: '60px' }}>
            <Grid item xs={7}>{props.task.task} </Grid>
            <Grid item xs={2}>{isComplete(props.task.complete)}</Grid>
            <Grid item xs={3}>
                <CardActions>
                    <MarkComplete id={props.task.id} getTaskList={props.getTaskList}/>
                    <DeleteTask id={props.task.id} getTaskList={props.getTaskList}/>
                </CardActions>
            </Grid>
       </Grid>
    </Card>
   )
}

export default DisplayTask;