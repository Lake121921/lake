import React,{ useState,createContext, Children, useContext } from "react"
//1. context create adergen
//reateContext: malet Hook neche,intial madereg alebet
const colorContext=createContext()
//3. leloche access endiagergut read adergen malet new
export const useColor=()=>{
    return useContext(colorContext)
}
//contextu create tederege malet new  but leleloche provide betedereg honeta alitekemetem .export yetederegew lela bota metekem endichale new up to line 12
export const ThemeProvider=()=>{
    const[color,setColor]= useState('light')
    const colorToggler=()=>{
        setColor((pre)==='light'?'dark':'light')
    }
    return(
        //2. contexte provide adergen
        //yihe degemo be colorCotext amakagnenet provide enadergewalen malet new.'provide'emilew egna lelelawe provide eminadergew neger with value malet new:colore with color toggler(function)yihen provide yetederegewen hulum componetoche lemetekem bezihe sire ende chailed bezihe range wesite mekemet alebachew
        <colorContext.Provider value={{color,colorToggler}}>
            {Children}
        </colorContext.Provider>
    )
}