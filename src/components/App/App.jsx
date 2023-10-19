import {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayTask from '../DisplayTask/DisplayTask.jsx';
import NewTask from '../NewTask/NewTask.jsx';


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
      <NewTask/>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {
            taskList.map((task) => {
              return <DisplayTask key={task.id} task={task} />
            })
          }
        </tbody>
      </table>
    </div>
  );

}

export default App
