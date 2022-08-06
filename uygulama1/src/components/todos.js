import React from 'react'

function Todos({todo,todos,setTodos}) {

    const deleteTodos=(ID)=>{

        setTodos(todos.filter((item)=> item.id !==ID))
    }

    const completedFunc=()=> {
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item,completed:!item.completed
                }
            }
            return item
        }

        ))
    }
  return (
    <li className={todo.completed ? "completed":""}>
        <div className='view'>
         <input className="toggle" type="checkbox" onClick={()=>{
            completedFunc()
         }}/>
         <label>{todo.name}</label>
         <button className="destroy" onClick={()=>{
            deleteTodos(todo.id)
         }}></button>
        </div>

    </li>
  )
}

export default Todos

