import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

export const TodoDetails = ()=>{
    const [todo,setTodo] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8080/Todos/${id}`).
        then((response)=>{
            console.log(response);
            setTodo(response.data)
        })
    },[])

    const complete = ()=>{
        setTodo({
            title:todo.title,
            status:true
        })
    }

    return(
        <div>
            <h4>Title:{todo.title}</h4>
            <h4>Status:{todo.status? "Completed": "Not Completed"}</h4>
            <button onClick={complete}>Complete</button>
            <button>Delete</button>
        </div>
    )
}