import React, { useEffect } from "react";
import { connect } from "react-redux";
import Todoitem from "./Todoitem";
import { getcomplete, getincomplete } from "./selectors";
import { loadtodos, removetodos, updatetodos } from "./thunks";
import Todolistform from "./Todolistform";
import './todolist.css';

const Todolist = ( { todocom, todoincom, removeaction, updateaction, loadtodosaction }) => { 
   useEffect( () => { 
          loadtodosaction() 
       },[] );
   
  return( <div className = "list-wrapper">
      <Todolistform/>
   <h1 className = "headings" > Todolist </h1>
         <h2 className="headings"> Incompleted list </h2>
         <ul>
            { todoincom.map( todo => 
               <li>
                   <Todoitem 
                        todo = { todo } 
                        removeaction = { removeaction } 
                        updateaction = { updateaction }
                     />
               </li>
                        )
           }
        </ul>
       
   <h2 className = "headings" > Completed list </h2>
        <ul>
         {todocom.map( todo =>
            <li> 
               <Todoitem 
                  todo = { todo } 
                  removeaction = { removeaction } 
                  updateaction = { updateaction }/>
            </li>
                     )
         }
        </ul>
       
     
  
   </div>
   );
   
}
const mapStateToProps = ( state )=>
            ( { todocom : getcomplete( state ),
                todoincom : getincomplete( state ) 
               } 
            );

const mapStateToDispatch = ( dispatch )=>
            ( { 
               updateaction : ( id ) => 
                  dispatch( updatetodos( id ) ),
               loadtodosaction : () =>
                  dispatch( loadtodos() ),
               removeaction :( id ) =>
                  dispatch( removetodos( id ) ),
             
               } 
            )
 export default connect(mapStateToProps,mapStateToDispatch)(Todolist);