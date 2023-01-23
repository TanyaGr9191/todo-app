import { TodoApp } from './pages/todo-app.jsx'
import { TodoDetails } from './pages/todo-details.jsx'

const routes = [
    {
        path: '/',
        element: <TodoApp />,
    },
    {
        path: 'todo/:todoId',
        element: <TodoDetails />,
    },
]

export default routes