import React from "react";
import "./Task.css"
import Button from "./Button";

const Task = ({ task , DelTask , taskDone}) => {

    const handleDelTask = () => {
        DelTask(task)
    }

    const handleTaskDone = () => {
        taskDone(task)
    }

    if (task.completed) {
        return (
            <div className="task">
                <div className="task-container" style={{backgroundColor: "white", color: "black"}} onClick={handleTaskDone}>{task.title}</div>
                <Button onClick={handleDelTask}>Del</Button>
            </div>
            )
    } else {
        return (
        <div className="task">
            <div className="task-container" onClick={handleTaskDone}>{task.title}</div>
            <Button onClick={handleDelTask}>Del</Button>
        </div>
        )
    }

}

export default Task
