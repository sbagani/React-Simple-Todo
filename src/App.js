import { useState } from 'react'
import Header from './components/Header'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      task : "setup development server",
    },
    {
      id : 2,
      task : "Develop website",
    },
    {
      id : 3,
      task : "abjCVJD",
    }
  ])

  const onSubmit = (task) =>{
    console.log(task)
    const id = Math.floor(Math.random() * 10000 +1)
    const newTodo = {id, ...task}
    setTodos([...todos, newTodo])
  }
  return (
    <div className="App">
     <Header title="Simple Todo App"/>
     <InputTodo onSubmit={onSubmit}/>
     <TodoList todos = {todos} value={todos}/>
    </div>
  );
}

export default App;
