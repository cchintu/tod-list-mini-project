import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos } from './todo/Reducers';
const reducers={ todos, };

const creducers=combineReducers(reducers);

export const store=()=>createStore(creducers,
                                   composeWithDevTools( 
                                        applyMiddleware( thunk ) ) 
                                      );

