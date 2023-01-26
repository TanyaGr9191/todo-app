import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoList } from '../cmps/todo-list'
import { TodoEdit } from '../cmps/todo-edit'
import { Loading } from '../cmps/loading'
import { loadTodos, removeTodo, loadTodo, updateTodo, addTodo, resetTodo,setTodos } from '../store/todo/todo.action'



export const TodoApp = () => {
    const { todos, todo, } = useSelector(state => state.todoModule)
    const dispatch = useDispatch()

    const [isEdit, setEdit] = useState(false)

    useEffect(() => {
        dispatch(loadTodos())
        dispatch(resetTodo())
    }, [dispatch])

    const onRemoveTodo = (ev, todoId) => {
        dispatch(removeTodo(ev, todoId))
        dispatch(loadTodos())
    }

    const onSetTodos=(todos)=>{
        dispatch(setTodos(todos))
    }
    const onEditTodo = (todo) => {
        setEdit(!isEdit)
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
                <TodoEdit
                    isEdit={isEdit}
                    todo={todo}
                    onSaveTodo={onSaveTodo}
                    onEditTodo={onEditTodo} />
                <TodoList
                    todos={todos}
                    onRemoveTodo={onRemoveTodo}
                    onSetTodos={onSetTodos}
                    onEditTodo={onEditTodo} />
            </div>
        </section>
    )
}