import React, { useState} from "react";
import { connect } from "react-redux";
import { createtodo } from "./Actions";
import { gettodos } from "./selectors";
import { addtodos } from "./thunks";
import './todolistform.css';

const Todoform = ( { todos, addaction, addtodosaction } ) => {
    const [ value, setvalue ] = useState();

    return(
    <div className = "new-todo-form">

    <h1> Create To-Do List: </h1>
    <input  className = "new-todo-input"
            type = "text" 
            value = { value } 
            placeholder = "add your new todo" 
            onChange = { e => setvalue( e.target.value ) }
        />

    <button onClick = { () => 
        {   const isDuplicateText =
            todos.some( todo => todo.text === value );
        
            if ( !isDuplicateText && value!=='') {
            addtodosaction( value );
            setvalue('');
        }
        
        else { alert( "to-do item already exists or you have not entered any todo!!" ) }
        }
                    }
             className = "new-todo-button">
             Add To-Do
    </button>
    </div>
    );
}

const mapStateToProps = ( state ) => ( { todos : gettodos( state ) } ) ;
const mapStateToDispatch = ( dispatch ) => ( { addaction : ( text ) => 
                                               dispatch( createtodo ( text ) ),
                                               addtodosaction: ( text ) =>
                                               dispatch( addtodos( text ) ),
                                              }
                                            );

 export default connect(mapStateToProps,mapStateToDispatch)(Todoform);