import {useState, useEffect} from 'react';
import axios from 'axios';

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
    <div>
      <h1>TO DO APP</h1>
      {JSON.stringify(taskList)}
    </div>
  );

}

export default App
