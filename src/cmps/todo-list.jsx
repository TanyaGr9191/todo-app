import { Loading } from "./loading";
import { TodoPreview } from "./todo-preview"



export const TodoList = ({ todos, onRemoveTodo, onEditTodo }) => (
    <section className="todo-list">
        <div className="todo-list-container">
            {todos ?
                todos.map(todo =>
                (<TodoPreview
                    todo={todo}
                    key={todo.id}
                    onRemoveTodo={onRemoveTodo}
                    onEditTodo={onEditTodo} />)) :
                <Loading />}
        </div>
    </section>
)
