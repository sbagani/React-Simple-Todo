import React from 'react'
import TodoItem from "./TodoItem"
const TodoList = ({todos, value}) => {
    return (
        <div>
            {todos.map((todo) => (<TodoItem todo={todo} value={value}/>))}
        </div>
    )
}

export default TodoList
