import { ADDTODOLISTITEM, REMOVETODOLISTITEM, SETTODOLISTITEM, LOADSUCCESS, } from "./Actions";

export const todos = ( state = [], action ) => {
    const { type, payload } = action;
    switch( type )
    {
        case ADDTODOLISTITEM : { if ( payload.todoitem.text )
                                        return state.concat( payload.todoitem );
                                return state; 
                               }
        case SETTODOLISTITEM : { return state.map( ( todo ) =>
                                     { if( todo.id===payload.todo.id )
                                            { return payload.todo; }
                                        return todo;
                                     }
                                         ) 
                                }    
        
        case REMOVETODOLISTITEM : { const { todo : todoToRemove } = payload;
                                     return state.filter( ( todo ) => ( 
                                        todo.id!==todoToRemove.id ) 
                                                    )
                                 }

        case LOADSUCCESS : { return state = payload.todos }
        

        
               
        default : return state;                                   
    }

}