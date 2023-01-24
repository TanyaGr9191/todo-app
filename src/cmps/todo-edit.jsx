import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'


export const TodoEdit = ({ isEdit, onEditTodo, onSaveTodo }) => {
    const { todo } = useSelector(state => state.todoModule)
    const [txt, setTxt] = useState(isEdit ? todo?.txt : '')

    useEffect(() => {
        setTxt(isEdit ? todo?.txt : '')
    }, [isEdit, todo?.txt])

    const handleChange = (ev) => {
        setTxt(ev.target.value)
    }

    function onSave() {
        if (isEdit) {
            onEditTodo()
        }
        onSaveTodo( { ...todo, txt })
        setTxt('')
    }

    function onKeyPress(e) {
        if (e.which === 13) {
            onSave()
        }
    }

    return (
        <div className='todo-edit'>
            <input placeholder={isEdit ? 'Edit' : 'Add'} value={txt} onChange={handleChange} type="text" onKeyDown={onKeyPress} />
            <button onClick={onSave}>Save</button>
        </div>
    )
}