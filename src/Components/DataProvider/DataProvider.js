

import React,{createContext, useReducer,children} from "react";
//for available the update of the basket we need to create a context
export const DataContext =createContext()
//after creating the context we need to initiate  the data provider & yihe data provider return emiadergew create betederegew datacontext amakegnenet provide emidereguten values available madereg new lehulum componentochi.enezan componetochi childre alinachew,value lay pass eminadergew 'useReducer'new,yihe useReducer Hook degemo last lay ale emiyizew
export const DataProvider =({children,reducer,initialState})=>{
    return(
        //yihen(userReducer)=> reducer ena initialSaten le DataProvider ayayizen enlikeletalen keza available lemaderge export madereg alebet
       <DataContext.Provider value={useReducer(reducer,initialState)}>
         {children}
       </DataContext.Provider>
    )
}
//const [state,dispatch]=useReducer(reducer,initialState)=>dispatch malet intial change yimeselale