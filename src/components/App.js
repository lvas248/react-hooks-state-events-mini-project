import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filter, setFilter] = useState("All")

  function onTaskFormSubmit(obj){
    setTasks([...tasks, obj])
  }
  

  function handleDeleteClick(e){
    setTasks(tasks.filter(task =>{
      return (task.text === e.target.previousSibling.textContent) === false
    }))
  }

  function handleFilterClick(e){
    setFilter(e.target.textContent)
    }
  
  const filteredTasks = tasks.filter( task =>{
    if(filter === "All"){
      return true
    }else{
      return task.category === filter
    }
  })

  // console.log("filteredTasks: ",filteredTasks)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filter={filter} categories={CATEGORIES} handleFilterClick={handleFilterClick}/>
      <NewTaskForm  categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} filter={filter} handleDeleteClick={handleDeleteClick}/>
    </div>
  );
}

export default App;
