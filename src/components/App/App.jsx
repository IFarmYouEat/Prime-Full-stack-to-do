import {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayTask from '../DisplayTask/DisplayTask.jsx';
import NewTask from '../NewTask/NewTask.jsx';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';


function App () {
  
  const [taskList, setTaskList] = useState([]);

  const getTaskList = () => {
    axios.get('/todo').then((response) => {
      console.log(response.data);
      setTaskList(response.data);
    }).catch ((error) => {
      console.log('Error in getTaskList', error);
      alert("Tasks could not be brought from server");
    })
  }

  useEffect(() =>{
    getTaskList();
  }, []);

  return (
    <Container>
      <h1>TO DO APP</h1>
      <NewTask getTaskList={getTaskList}/>
      <br/>
      <br/>
      
      <Grid container spacing={2} >
          {taskList.map((task) => (
            <Grid item xs={6} key={task.id} wrap="wrap">
                <DisplayTask key={task.id} task={task} getTaskList={getTaskList} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default App;
