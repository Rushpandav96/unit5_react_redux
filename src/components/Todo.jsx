import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addtodo } from '../Redux/action'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const Todo = ()=>{
    const [text,setText] = useState("")
    // const [todoLists,SetTodoLists] = useState([]);

    
    const dispatch = useDispatch()
    const todos = useSelector((store)=>store.todos);
    // console.log(todos)

    const handleAdd = ()=>{
        const payload = {
            title : text,
            status : false
        }
        
        fetch(" http://localhost:8080/Todos",{
            method:"Post",
            headers:{
                "content-type":"Application/json",
            },
            body:JSON.stringify(payload)
        }).then(()=>setText("")).then(getData)

    }

    useEffect(()=>{
        getData();
    },[])

    const getData = ()=>{
        axios.get('http://localhost:8080/Todos')
    .then(function (response) {
      // handle success
       //   console.log(response.data);

      dispatch(addtodo(response.data))
     })
    }

    
    return(
        <div>
            <input value={text} type="text" placeholder="Enter Todo" onChange={(e)=>{setText(e.target.value)}} />
            <button onClick={handleAdd}>Add Todo</button>

            {todos.map((e)=>(
                <div key={e.id}>
                    <Link to={`/Todos/${e.id}`}>
                    {e.title}</Link>
                    </div>
                    
            ))}
        </div>
    )
}