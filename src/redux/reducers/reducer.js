import { GET_LIST } from "../types";

const reducer = (state = [], action) => {
    switch(action.type) {
        case GET_LIST:
            return {
                ...state,
                todoList: action.payload
            }
        default:
            return state    
    }
}

export default reducer; 