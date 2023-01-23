
const initialState = {
    count: 0,
    todos: null,
    todo: null
}

export function todoReducer(state = initialState, action) {
    let newState = state
    var todos
    // var todo
    switch (action.type) {
        case 'SET_TODOS':
            newState={ ...state, todos: action.todos }
            break
        case 'REMOVE_TODO':
            todos = state.todos.filter(todo => todo.id !== action.todoId)
            newState = { ...state, todos }
            break
        case 'ADD_TODO':
            todos = [...state.todos, action.todo]
            newState = { ...state, todos }
            break
        case 'UPDATE_TODO':
            todos = state.todos.map(currTodo => (currTodo.id === action.todo.id) ? action.todo : currTodo)
            newState = { ...state, todos }
            break
        // case 'TOGGLE_TODO':
        //     todos = state.todos.map(currTodo => (currTodo._id === action.todo._id) ? action.todo : currTodo)
        //     return { ...state, todos }


        // case 'SET_FILTER':
        //     return { ...state, filterBy: action.value }

        case 'SET_TODO':
            newState = { ...state, todo: action.todo }
            break
        default:
            return state
    }


    // For debug:
    // window.movieState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    console.log('New State:', newState)
    return newState
}