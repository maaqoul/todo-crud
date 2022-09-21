import React from 'react'
const TodoElement = (props) => {
    return <li style={{textDecoration: props.todo.done ? 'line-through' : 'none'}}>
    {props.todo.item} | <button onClick={()=>props.toggle(props.todo.id)}>done</button>
    </li>
}

export default TodoElement;