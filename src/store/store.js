import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { todoReducer } from './todo/todo.reducer'

const rootReducer = combineReducers({
    todoModule: todoReducer,
})

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk)))


