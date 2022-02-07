import React from 'react'
import Todo from './Todo'
import style from './TodoList.module.css'

const TodoList = ({todos,deleteTodo,checkTodo}) => {
    

    const alltodo = todos.map((item)=>{
        return <Todo key={item.id} todoItem={item} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    })

    return (
        <div>
            <section>
                <ul className={style.todolist}>
                    {alltodo}
                </ul>
            </section>
            
        </div>
    )
}

export default TodoList
