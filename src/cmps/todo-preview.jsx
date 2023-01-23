import { Link } from 'react-router-dom'

export const TodoPreview = ({ todo, onRemoveTodo, onEditTodo }) => (
    <div className='todo-preview'>
        <span>{todo.txt}</span>
        <span className='buttons-container'>
            {/* <Link to={`/todo/edit/${todo._id}`}>Edit</Link> */}
            <Link to={`/todo/${todo.id}`} className='details'>Details</Link>
            {/* <button className='btn-list' onClick={(ev)=>onDetailsTodo(ev,todo)}>Edit</button> */}
            <button className='edit' onClick={()=>onEditTodo(todo)}>Edit</button>
            <button className='btn-remove' onClick={(ev) => { onRemoveTodo(ev, todo.id) }}>Remove</button>
        </span>
    </div>
)
