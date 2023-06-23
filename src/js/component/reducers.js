// do the actions we want
import { ADD_ONE, MINUS_ONE, ADD_USER} from "./actions.js";

//initialize the initial state

const initialState = {
    numberOfItems: 0,
    username: '',
}

//reducer function
function reducer (state=initialState, action) {
    switch(action.type){
        case ADD_ONE:
            return {
                ...state,
                numberOfItems:state.numberOfItems + 1,
                
            }
        case MINUS_ONE:
            return {
                ...state,
                numberOfItems:state.numberOfItems - 1,
                
            }
        case ADD_USER:
            return {
                ...state,
                username: action.username, 
            }

        default:
            return state;
    }
}

export default reducer