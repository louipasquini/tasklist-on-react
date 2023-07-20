import React from "react";
import Task from "./Task"

const Tasks = ({ tasks , DelTask }) => {
    return (
        <>
            {tasks.map((task) => (<Task task={task} DelTask={DelTask} />))}
        </>
    )

}

export default Tasks;
