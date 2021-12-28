import { useState } from "react";
import Task from "./task";

const Tasks = (props) => {
    const { tasks, onDelete, onToggle } = props;
    return (  
        <>
         {tasks.map(task => <Task key= {task.id} task= {task} onDelete = {onDelete} onToggle= { onToggle }></Task>)}
        </>
    );
}
 
export default Tasks;