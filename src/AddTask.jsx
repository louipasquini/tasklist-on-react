import React , { useState } from "react";
import Button from "./Button";
import "./AddTask.css"

const AddTask = ({ handleTaskAddition }) => {
    const [inputData,setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return (
        <div>
            <input value={inputData} onChange={handleInputChange} type="text" />
            <Button onClick={handleAddTaskClick}>Add</Button>
        </div>
    )
}

export default AddTask;
