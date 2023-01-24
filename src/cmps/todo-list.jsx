import { Loading } from "./loading"
import { TodoPreview } from "./todo-preview"
import { useCallback, useEffect, useState } from "react"
import update from 'immutability-helper'

export const TodoList = ({ todos, onRemoveTodo, onEditTodo, onSetTodos }) => {
    const [todosLocal, setTodosLocal] = useState([])

    const moveTodo = useCallback((dragIndex, hoverIndex) => {
        setTodosLocal(prev =>
            update(prev, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prev[dragIndex]],
                ],
            }),
        )
    }, [])

    //use local state to obtain the previous state to make drag and drop more smooth
    useEffect(() => {
        setTodosLocal(todos)
    }, [])

    useEffect(() => {
        if (todosLocal.length) {
            onSetTodos(todosLocal)
        }
    }, [todosLocal])

    return <section className="todo-list">
        <div className="todo-list-container"  >
            {todosLocal ?
                todosLocal.map((todo, i) => (
                    <TodoPreview
                        todo={todo}
                        moveTodo={moveTodo}
                        id={todo.id}
                        index={i}
                        key={todo.id}
                        onRemoveTodo={onRemoveTodo}
                        onEditTodo={onEditTodo} />
                )) :
                <Loading />}
        </div>

    </section>
}
