import React,{useState} from 'react'
import { v4 as uuid } from 'uuid'
import style from './Form.module.css';

const Form = (props) => {

    const [val,setval] = useState('');
    const [isValid,setValid] = useState(true);

    const inputChangeHandler = (e)=>{
        setval(e.target.value);
        if(val.trim().length>0){
            setValid(true);
        }
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if(val.trim().length===0){
            setValid(false);
            setval("");
            return ;
        }
        const newTodo = {
            id:uuid(),
            todo:val,
            checked:false
        }
        props.addTodo(newTodo);

        setval("");
    }

    return (
        <form onSubmit={submitHandler}>
            <input className={style.Form} style={{border:`${!isValid ? '2px solid red':''}`}} onChange={inputChangeHandler} type="text" placeholder="Add Your Todo" value={val} />
        </form>
    )
}

export default Form
