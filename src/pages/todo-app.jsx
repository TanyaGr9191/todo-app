import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoList } from '../cmps/todo-list'
import { TodoEdit } from '../cmps/todo-edit'
import { Loading } from '../cmps/loading'
import { loadTodos, removeTodo, loadTodo, updateTodo, addTodo, resetTodo } from '../store/todo/todo.action'
import { ImgContainer } from '../cmps/img-container'

export const TodoApp = () => {

    const { todos, todo } = useSelector(state => state.todoModule)
    const dispatch = useDispatch()

    let [isEdit, setEdit] = useState(false)

    useEffect(() => {
        dispatch(loadTodos())
        dispatch(resetTodo())
    }, [dispatch])

    const onRemoveTodo = (ev, todoId) => {
        dispatch(removeTodo(ev, todoId))
        dispatch(loadTodos())
    }

    const onEditTodo = (todo) => {
        isEdit = !isEdit
        setEdit(isEdit)
        if (todo) {
            dispatch(loadTodo(todo.id))
        }
    }

    const onSaveTodo = (todo) => {
        dispatch((todo.id ? updateTodo(todo) : addTodo(todo)))
        dispatch(resetTodo())
    }


    if (!todos) return <Loading />
    return (
        <section className='todo-app'>
            <div className='todo-app-container'>
                {!todos && <div>Add something to list!</div>}
                <ImgContainer src={`https://res.cloudinary.com/dxwlsxl5s/image/upload/v1674474694/todo-list_zxu329.svg`} alt={`app-image`} width={`590px;`} divStyle={`app-image`} />
                <TodoEdit
                    isEdit={isEdit}
                    todo={todo}
                    onSaveTodo={onSaveTodo}
                    onEditTodo={onEditTodo} />
                <TodoList
                    todos={todos}
                    onRemoveTodo={onRemoveTodo}
                    onEditTodo={onEditTodo} />
            </div>
        </section>
    )
}