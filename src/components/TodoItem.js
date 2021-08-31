import React from 'react'

const TodoItem = ({todo, value}) => {
    return (
        <div>   
           <h3>{todo.task}<button value="delete">Delete</button></h3>
           {value.task}
        </div>
    )
}

export default TodoItem
