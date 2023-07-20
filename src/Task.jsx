import React from "react";
import "./Task.css"
import Button from "./Button";

const Task = ({ task , DelTask}) => {

    const handleDelTask = () => {
        DelTask(task)
    }

    return (
    <div className="task">
        <div className="task-container">{task.title}</div>
        <Button onClick={handleDelTask}>Del</Button>
    </div>
    )
}

export default Task
