import React,{useState,useEffect} from 'react'
import TodoList from './TodoList'
import Form from './Form'
import style from './TodoApp.module.css';

const TodoApp = () => {
    const Dummy_Todo = JSON.parse(window.localStorage.getItem('todos') || "[]") ;

    const [todos,setTodos] = useState(Dummy_Todo);


    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (newTodo)=>{
        setTodos([...todos,newTodo]);
    }
    

    const deleteTodo = (id)=>{
        setTodos((prevState)=>{
            return prevState.filter((todo)=>todo.id!==id);
        })
    }

    const checkTodo = (id)=>{
        setTodos((prevState)=>{
            return prevState.map((item)=> item.id===id?{...item,checked:!item.checked}:item)
        })
    }

    return (
        <div className={style.todoApp}>
            <h1 className={style.h1}>ToDo App</h1>
            <Form addTodo={addTodo} todos={todos} />
            <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
        </div>
    )
}

export default TodoApp
