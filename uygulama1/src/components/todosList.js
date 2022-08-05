import React from 'react'
import Todos from './todos'

function TodosList(props) {
  const { todos, setTodos, filtered } = props;

  console.log("filtred",filtered);
  console.log("props-filtred",props.filtered)
  
  return (

    <ul className='todo-list'>
      {filtered.map((todo) => (
        <Todos key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>

  )
}

export default TodosList
