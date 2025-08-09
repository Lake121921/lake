import React, { useContext, useEffect } from "react";
import Routing from "./Routing";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";

function App() {
  const [{user},dispatch]=useContext(DataContext)
  useEffect(()=>{
     auth.onAuthStateChanged((authUser)=>{//onAuthStateChangeed is a method that managed by firebase
      if(authUser){
        dispatch({//dispatch 2 neger yikebelale(type & user)
          type:Type.SET_USER,
          user:authUser,
        })
      }else{
        dispatch({
          type:Type.SET_USER,
          user:null,
        })
      }
     })
  },[])
  return (
    <div>
       <Routing />
    </div>
  );
}

export default App;
