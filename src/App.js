import React from 'react';
import { useState } from 'react';
import Header from './components/header';
import Task from './components/tasks';
import AddTask from './components/AddTask';


function App() {

const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(
    [
        { 
          id: 1,
          text: 'Food Shopping',
          day: 'Feb 26th 1998',
          reminder: true
        },
    
        { 
          id: 2,
            text: 'Clean the Yards',
            day: 'March 7th 2004',
            reminder: true
          },
    
          {
             id: 3,
            text: 'Feed the Cattles',
            day: 'April 23rd 2008',
            reminder: true
          },
    ]
    
)

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask]);
}

//Delete
const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    
}

const toggleReminder = (id) => {
     setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd= {showAddTask}/>
     {showAddTask ? <AddTask onAdd= {addTask}/> : ''}
    { tasks.length > 0 ? <Task tasks = {tasks} onDelete= {deleteTask} onToggle = {toggleReminder} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
