import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import style from './Todo.module.css';

const Todo = ({todoItem,deleteTodo,checkTodo}) => {

    const deleteHandler = (id)=>{
        deleteTodo(id);
    }

    const inputChangeHandler = (id)=>{
        checkTodo(id);
    }

    return (        
        <li className={style.todo} style={{textDecoration:`${todoItem.checked ? 'line-through white':''}`} } >
            <p> 
                <span> <input className={style.box}  onChange={()=>inputChangeHandler(todoItem.id)} type="checkbox" defaultChecked={todoItem.checked} /> </span>
                {todoItem.todo} 
                
                <span  className={style.text} onClick={()=>deleteHandler(todoItem.id)}> <FaTrashAlt/> </span>  
            </p> 
        </li>
            
        
    )
}

export default Todo
