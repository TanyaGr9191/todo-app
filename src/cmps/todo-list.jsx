import { Loading } from "./loading"
import { TodoPreview } from "./todo-preview"
import { useCallback, useEffect, useState } from "react"
import update from 'immutability-helper'

export const TodoList = ({ todos, onRemoveTodo, onEditTodo, onSetTodos }) => {
    const [todosLocal, setTodosLocal] = useState([])


    function moveItem(todosToChange,from, to) {
        const itemToMove = todosToChange.splice(from, 1)[0];
        todosToChange.splice(to, 0, itemToMove);
        
        return todosToChange
      }

    const moveTodo = useCallback((dragIndex, hoverIndex) => {
        const todosToUpdate =   moveItem(todos,dragIndex,hoverIndex)
        onSetTodos(todosToUpdate)
    }, [])

    return <section className="todo-list">
        <div className="todo-list-container"  >
            {todos ?
                todos.map((todo, i) => (
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
