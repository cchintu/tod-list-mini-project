import React from "react";
import './todoitem.css';

const Todoitem = ( { todo, removeaction, updateaction } ) => (
  <div className = "todo-item-container">   

   <h3> { todo.text } </h3>

      <p> { ( todo.isCompleted ) ?
                      "status: completed" : 
                      "status: uncompleted" 
          } 
       </p>

      <div className = "buttons-container">
         { ( !todo.isCompleted ) ?
                <button onClick = { () => 
                      updateaction( todo.id ) } 
                      className = "completed-button" > 
                       set to completed
                </button> :''}
                <button onClick = { () => 
                    removeaction ( todo.id ) } 
                    className = "remove-button" >
                      remove
                </button>
     </div>
  </div>
  );

export default  Todoitem;