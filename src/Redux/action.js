export const ADD_TODO = "ADDTODO";

export const addtodo = (data)=>{
    return {
        type:ADD_TODO,
        payload:data
    }
}