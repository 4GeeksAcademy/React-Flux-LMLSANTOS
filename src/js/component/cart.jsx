import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {ADD_ONE, MINUS_ONE} from "./actions.js"

const Cart =() => {
    
    const state = useSelector((state) => state)
    //calling the actions
    const dispatch = useDispatch();
    console.log("state here ===>", state);
    
    return (
        <div className="text-center">
            <div><h2>Items inside Cart: {state.numberOfItems}</h2></div>
            <div><h2>{state.username}</h2></div>
            <button onClick = {() => dispatch({type: ADD_ONE})}>Add Item to cart</button>
            {state.numberOfItems !== 0 && 
                <button onClick = {() => dispatch({type: MINUS_ONE})}>Remove Item to cart</button>
            }
        </div>
    )
}

export default Cart;


