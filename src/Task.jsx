import React from "react";
import "./Task.css"
import Button from "./Button";

const Task = ({ task }) => {
    return (
    <div class="task">
        <div className="task-container">{task.title}</div>
        <Button>Del</Button>
    </div>
    )
}

export default Task
