import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

// import { systemReducer } from './reducers/system.reducer'
import { todoReducer } from './todo/todo.reducer'
// import { userReducer } from './user/user.reducer'

const rootReducer = combineReducers({
    // systemModule: systemReducer,
    todoModule: todoReducer,
    // userModule: userReducer,
})

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk)))


// For debug only!
// store.subscribe(() => {
//     console.log('Store state is:', store.getState())
// })
