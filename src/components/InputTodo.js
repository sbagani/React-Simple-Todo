import React from 'react'
import {useState} from 'react'

const InputTodo = ({onSubmit}) => {
    const [addTodo, setAddTodo] = useState('')

    const onAdd =(e) =>{
        e.preventDefault();

        onSubmit({addTodo})
    }
    return (
        <div>
            <div>
            <form onSubmit={onAdd} >
                <input type="text" value={addTodo} placeholder="Add todo..." onChange={(e) => setAddTodo(e.target.value)}/>
                <input type="submit" value="SUBMIT"/>
            </form>
            </div>
        </div>
    )
}

export default InputTodo
