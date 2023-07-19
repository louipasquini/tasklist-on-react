import React, { useState } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
      {
        id: "1",
        title: "Estudar",
        completed: false,
      },
      {
        id: "2",
        title: "ler",
        completed: true,
      },
  ])

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>
    </>

  )
}

export default App;