//import { useReducer } from "react"
import { Type } from "./action.type"
//initial state is the initial value of the basket ,the value of the basket is an empty array[]
export const initialState={
    basket:[],
    user: null
}
//requre states & actions:state for intial value and action for the type of action we want to perform

export const reducer=(state,action)=>{
  switch (action.type){
    case Type.ADD_TO_BASKET:
        //check if the item exists in the 
    const existingItem=state.basket.find((item)=>item.id===action.item.id)
    if(!existingItem){
        return {
            ...state,
            basket:[...state.basket,{...action.item,amount:1}]
        }
    }else{
        const updatedBasket=state.basket.map((item)=>{
           return  item.id===action.item.id? {...item,amount:item.amount + 1}:item
        })
        //action.item is the item that we are going to add to the cart
        //action.item.id is the id of the item that we are going to add to the cart

        return{
            ...state,
            basket :updatedBasket
        }
    }    
    case Type.REMOVE_FROM_BASKET:
        const index=state.basket.findIndex(item=>item.id===action.id)
        let newBasket= [...state.basket]
        
        if (index >=0){
            if(newBasket[index].amount >1){
                newBasket[index]={...newBasket[index],amount:newBasket[index].amount-1}
            }else{
                newBasket.splice(index,1)
            }//splice is used to remove the item from the basket if the amount is 1
            //if index >=0 then we will remove the item from the basket
        }
            return {
                ...state,
                basket:newBasket
            }
            case Type.SET_USER://it is an action type comes from action.types.....action is an object && 'user'malet degemo eminasigebaw data malet new
                return{
                    ...state,
                    user:action.user
            
                }
    /* return {
            //...called spread operater,it copie the existing state and add the new item to the backet.
            ...state,
            basket:[...state.basket,action.item]
        }*/
        default:
            return state;
    }
}
//
//const [state,dispatch]=useReducer(reducer,initialState)