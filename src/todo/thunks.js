import { loadsuccess, createtodo, removetodo, settodo, } from "./Actions"

export const loadtodos = () => async ( dispatch, getstate ) => {
                            try{ const response = await fetch( 'http://localhost:8080/todos' );
                                 const todos = await response.json();
                                 dispatch( loadsuccess( todos ) );
                                }

                            catch( e )
                            { console.log( "error" );
                            } 
                           }

export const addtodos = ( text ) => async ( dispatch ) => {
                        try{ const body = JSON.stringify( { text } );
                             const response = await fetch( 'http://localhost:8080/todos', {
                                                 headers: {
                                                        'Content-Type': 'application/json',
                                                          },
                                                method: 'post',
                                                body,
                                                     }
                                                        );
                            const todoitem = await response.json();
                            dispatch( createtodo ( todoitem ) );
                            
                            
                        }
                        catch( e )
                        { console.log( "error" );
                        }
                    }

export const removetodos = ( id ) => async (dispatch) => {
                        try{ const response = await fetch( `http://localhost:8080/todos/${id}`, {
                                method: 'delete'
                                    }
                                    );
        const todoitem = await response.json();
        dispatch( removetodo( todoitem ) );

        
    }
    catch(e)
    { console.log( "error" );
    }
             }

export const updatetodos = ( id ) => async (dispatch) => {
    try{ const response = await fetch( `http://localhost:8080/todos/${id}/completed`, {
                                method: 'post'
                                    }
                                    );
        const todoitem = await response.json();
        dispatch( settodo( todoitem ) );

        
    }
    catch(e)
    { console.log( "error" );
    }
             }