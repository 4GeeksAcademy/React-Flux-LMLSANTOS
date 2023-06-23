import React from "react";
import { addUsername } from "./actions";
import { useDispatch } from "react-redux";

const Product = ()=> {
    const dispatch = useDispatch();
    return (
        <button onClick={()=> dispatch(addUsername("Luís"))}>Add this item to cart</button>
    )
}

export default Product