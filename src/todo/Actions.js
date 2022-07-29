export const ADDTODOLISTITEM = "ADDTODOLISTITEM"
export const createtodo = ( todoitem ) => ( { type :ADDTODOLISTITEM,
                                              payload : { todoitem },
                                            }
                                          );

export const REMOVETODOLISTITEM = "REMOVETODOLISTITEM"
export const removetodo = ( todo ) => ( { type : REMOVETODOLISTITEM,
                                          payload : { todo },
                                        }
                                      );
                                  
export const SETTODOLISTITEM = "SETTODOLISTITEM"
export const settodo = ( todo ) => ( { type : SETTODOLISTITEM,
                                       payload : { todo },
                                     }
                                    );

export const LOADSUCCESS = "LOADSUCCESS"
export const loadsuccess = ( todos ) => ( { type : LOADSUCCESS,
                                            payload : { todos },
                                          }
                                        );
                                 
