import { createSelector } from 'reselect';

export const gettodos = ( state ) => state.todos;

export const getcomplete = createSelector ( gettodos,
                ( todos ) =>
                     todos.filter( todo => todo.isCompleted ), 
                                            );

export const getincomplete = createSelector ( gettodos,
                 ( todos ) => 
                     todos.filter( todo => !todo.isCompleted ), 
                                            );