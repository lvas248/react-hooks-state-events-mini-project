import React, { useState } from "react";

function NewTaskForm( {categories, onTaskFormSubmit} ) {

  const [newTaskObj, setNewTaskObj] = useState({
    text: "",
    category: ""
  })

  function handleTextChange(e){
    setNewTaskObj({
      text: e.target.value,
      category: newTaskObj.category
    })
  }

  function handleCategoryChange(e){
    setNewTaskObj({
      text: newTaskObj.text,
      category: e.target.value
    })
  }
  const options = categories.map( category =>{
    if(category !== "All"){
      return <option key={category}>{category}</option>
    }
  })
  return (
    <form className="new-task-form" onSubmit={(e)=>{
        e.preventDefault()
        onTaskFormSubmit(newTaskObj)
    }}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} value={newTaskObj.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={newTaskObj.category}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
