import { ADD_TODO } from "./action";

export const TodoReducer = (store,action)=>{
    switch(action.type){
        case ADD_TODO:
            return {...store,todos: action.payload}
        
        default:
            return store
    }
}