import React from "react";
import Task from "./Task"

const Tasks = ({ tasks , DelTask , taskDone}) => {
    return (
        <>
            {tasks.map((task) => (<Task task={task} DelTask={DelTask} taskDone={taskDone}/>))}
        </>
    )

}

export default Tasks;
