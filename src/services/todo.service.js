import { API, graphqlOperation } from 'aws-amplify'
import { listTodos, getTodo, getWeather } from '../graphql/queries'
import { createTodo, deleteTodo, updateTodo } from '../graphql/mutations'


export const todoService = {
    query,
    getById,
    save,
    remove,
    getWeatherByCity
}

async function query() {
    return await API.graphql(graphqlOperation(listTodos))
}

async function getById(todoId) {
    return await API.graphql(graphqlOperation(getTodo, { id: todoId }))
}

async function remove(todoId) {
    return await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }))
}

async function save(todo) {
    if (todo.id) {
        return await API.graphql(graphqlOperation(updateTodo, { input: todo }))
    } else {
        return await API.graphql(graphqlOperation(createTodo, { input: todo }))
    }
}

async function getWeatherByCity(city) {
    try {
        const { data } = await API.graphql(graphqlOperation(getWeather, { city: city }))
        return data
    } catch (error) {
        console.log('error', error);
    }
}


