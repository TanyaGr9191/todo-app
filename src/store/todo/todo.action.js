import { todoService } from '../../services/todo.service'


export function loadTodos() {
    return async (dispatch) => {
        try {
            const result = await todoService.query()
            const todos = result.data.listTodos.items
            dispatch({ type: 'SET_TODOS', todos })
        } catch (err) {
            console.log('Oops, cannot load todos', err)
        }
    }
}

export function setTodos(todos) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_TODOS', todos })
        } catch (err) {
            console.log('Oops, cannot load todos', err)
        }
    }
}

export function removeTodo(ev, todoId) {
    ev.stopPropagation()
    return async (dispatch) => {
        try {
            await todoService.remove(todoId)
            dispatch({ type: 'REMOVE_TODO', todoId })
        } catch (err) {
            console.log('Cannot remove from todo list')
        }
    }
}


export function addTodo(todo) {
    return async (dispatch) => {
        try {
           const result = await todoService.save(todo)
           const savedTodo = result.data.createTodo
            dispatch({ type: 'ADD_TODO', todo: savedTodo })
        } catch (err) {
            console.log('Oops, cannot add todo', err)
        }
    }
}

export function updateTodo(todoToSave) {
    return async (dispatch) => {
        try {
            const result = await todoService.save(todoToSave)
            const savedTodo = result.data.updateTodo
            dispatch({ type: 'UPDATE_TODO', todo: savedTodo })
        } catch (err) {
            console.log('Oops, cannot update todo', err)
        }
    }
}

export function loadTodo(todoId) {
    return async (dispatch) => {
        try {
            const result = await todoService.getById(todoId)
            const todo = result.data.getTodo
            dispatch({ type: 'SET_TODO', todo })
        } catch (err) {
            console.log('Cannot set todo')
        }
    }
}


export function resetTodo() {
    return async (dispatch) => {
        try {
            const todo = null
            dispatch({ type: 'SET_TODO', todo })
        } catch (err) {
            console.log('Cannot set todo')
        }
    }
}
