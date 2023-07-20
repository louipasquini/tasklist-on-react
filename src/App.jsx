import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import "./App.css"

const App = () => {
  const [tasks, setTasks] = useState([])

  const DelTask = (task) => {
    const deletar = tasks.indexOf(task)
    if (deletar > -1) {
      console.log(deletar)
      tasks.splice(deletar, 1)
      const newTasks = [...tasks]
      console.log(newTasks)
      setTasks(newTasks)
    }
  }


  const handleTaskAddition = (taskTitle) => {
    if (taskTitle === '') {
      return false
    } else {
      const newTasks = [
        ...tasks,
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        },
      ];
      setTasks(newTasks);
    }
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} DelTask={DelTask}/>
      </div>
    </>

  )
}

export default App;
