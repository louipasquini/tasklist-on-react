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
      tasks.splice(deletar, 1)
      const newTasks = [...tasks]
      setTasks(newTasks)
    }
  }

  const taskDone = (task) => {
    if (task.completed) {
      task.completed = false
      task.title = task.title.replace(' (Done)','')

    } else {
      task.completed = true
      task.title = task.title + " (Done)"
    }
    console.log(task.completed)
    const newTasks = [...tasks]
    setTasks(newTasks)
  }


  const handleTaskAddition = (taskTitle) => {
    if (taskTitle === '' || taskTitle === ' ') {
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
      <h1>Tasklist</h1>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} DelTask={DelTask} taskDone={taskDone}/>
      </div>
    </>

  )
}

export default App;
