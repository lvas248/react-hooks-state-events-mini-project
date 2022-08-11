import React from "react";

function CategoryFilter( {categories, handleFilterClick, filter} ) {
  // console.log(categories, filter)
  const buttons = categories.map( category =>{
    return (<button className={category === filter? "selected": ""}
                    onClick={(e) => handleFilterClick(e)} 
                    key={category} 
                    >
                      {category}</button>)
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
