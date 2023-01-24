import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCustomDrag } from '../hooks/useCustomDrag'
import { useCustomDrop } from '../hooks/useCustomDrop'



export const TodoPreview = ({ todo, onRemoveTodo, id, onEditTodo, index, moveTodo }) => {
    const ref = useRef(null)

    const [{ handlerId }, drop] = useCustomDrop({ ref, index, moveTodo })
    const [{ isDragging }, drag] = useCustomDrag({ id, index })

    drag(drop(ref))

    if (!todo) return
    return <div className='todo-preview' ref={ref}
        style={{ backgroundColor: isDragging ? '#d9e3fd' : '#f7f7f7' }} data-handler-id={handlerId}>
        <span>{todo.txt}</span>
        <span className='buttons-container'>
            <Link
                to={`/todo/${todo.id}`}
                className='details'>
                <span>Details</span>
            </Link>
            <button
                className='edit'
                onClick={() => onEditTodo(todo)}>
                <span>Edit</span>
            </button>
            <button
                className='btn-remove'
                onClick={(ev) => { onRemoveTodo(ev, todo.id) }}>
                <span>Remove</span>
            </button>
        </span>
    </div>
}
