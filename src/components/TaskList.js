import React from "react";
import Task from "./Task"

function TaskList( {tasks, handleDeleteClick, filter} ) {

  const taskList = tasks.map( task =>{
    return (<Task handleDeleteClick={handleDeleteClick} 
                  key={task.text} 
                  category={task.category} 
                  text={task.text}/>)
  })

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
