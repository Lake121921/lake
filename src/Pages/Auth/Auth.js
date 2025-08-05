import React, { useState,useContext } from 'react'//useContext it comes by user 
import classes from "./SignUp.module.css";
import { Link} from 'react-router-dom';
import { auth} from '../../Utility/firebase';//it comes from firebase configuration
import { DataContext } from '../../Components/DataProvider/DataProvider';//DataContext it comes by user(useru create ketederege malet new)
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Type } from '../../Utility/action.type';
function Auth() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");//we have to satates email & password with empty string.
    const [error,setError]= useState("");//incase the error may be occure
    //console.log(password,email);//enzihen negeroche yizen wode firebase sign up adiregelin malet enchelalen authentication endiseralen malet new
    //state kelay asikemeten second signin signup emilewen function define enadergalen
    const [{user}, dispatch]= useContext(DataContext)
    console.log(user)
    const authHandler =async(e)=>{//this 'authHandler' is a function that define for sign in & sign up.
      e.preventDefault();//
      //console.log(e);//endezihe kehone ye sign up yihun ye create account ayileyilenem so maderge yaleben 'name' seten identifay maderge new
      console.log(e.target.name)
      if(e.target.name==="signin"){
        //firebase auth//le firebase i have this user so sign up adiregelign lemalet eminetekemew method(signInWithEmailAndPassword && createUserWithEmailAndPassword...they comes from firebase (ketechanew new ke filachen ayidelem,enezihe negeroche keteta install sinaderge kemeretenew ga much maderge alebet email new yemeretenew phone binemeret nuro phonenen entekem neber malet new firebase account sinkefet) ) nachew kezihe betache yalew neger then you can check your firebase on account of it.
        signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{// first pass yadergenew 'auth' b/c egna configure eyadergen yalenew bezihe new projectachen register yadergenew bezihe endehone maregagecha new keza ye userun email and password enenegerewalen..,keza userInfo yisetenal
          console.log(userInfo);
          dispatch({//dispatch 2 neger yikebelale enesum 1. type and 2.use:user info kemilew wesit 'user'yikebelale
            type: Type.SET_USER,
            user: userInfo.user
          })
        }).catch((err)=>{
          console.log(err)
        })
      }
     else{
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        console.log(userInfo);
        dispatch({//dispatch 2 neger yikebelale enesum 1. type and 2.use:user info kemilew wesit 'user'yikebelale
            type: Type.SET_USER,
            user: userInfo.user
          })
      }).catch((err)=>{
        console.log(err)
      })
    }
    //console.log(password,email)
  }
  return (
    <section className={classes.login}>
        {/*Logo*/}
        <Link to= "/">
          <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''
        />
        </Link>

        {/*form*/}
        <div className={classes.login_container}>
            <h1>Sign In</h1>
            <form>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email'id='email'/>
                    {/*(e)event is an object ,target refer emiadergew  ahun yalewen input target,value degemo target lay emigebaweb refer yadergal */}
                </div>
                <div>
                    <label htmlFor='password'>Password</label>  
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' id='password' />           
                </div>
                <button type='submit'//submit click siderg kelay yalewen authHandler function fire/execute yadergewal malet new
                onClick={authHandler} 
                name='signin'//for indentification purpose from 'signup'
                className={classes.signInButton}>Sign In</button>
            </form>

            {/*agreement*/}
            <p>
                by signing-in you agree to AMAZON FAKE CLONE conditions of use & sale.please see our privacy notice,our cookies notice and our interst-based Ads Notice.
            </p>
            {/*create account btn...,submit click siderg kelay yalewen authHandler function fire/execute yadergewal malet new*/}
            <button type='submit'
            onClick={authHandler} 
            name='signup'//for indentification purpose from 'signin'
            className={classes.login_registerButton}>
                Create your Amazon Account
            </button>
        </div>
    </section>
  )
}

export default Auth;