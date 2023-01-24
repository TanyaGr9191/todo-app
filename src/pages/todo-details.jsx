import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { loadTodo } from '../store/todo/todo.action'
import { utilService } from '../services/util.service'
import { ImgContainer } from '../cmps/img-container'
import { Weather } from '../cmps/weather'
import { Loading } from '../cmps/loading'
import { todoService } from '../services/todo.service'

export const TodoDetails = () => {
    const { todo } = useSelector(state => state.todoModule)
    const { todoId } = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        dispatch(loadTodo(todoId))
    }, [todoId, loadTodo])

    useEffect(() => {
        async function fetchData() {
            const weatherRes = await getWeather()

            if (weatherRes) {
                setWeather(weatherRes)
            }
        }
        fetchData()
    }, [todo])


    //GraphQL was used to obtain data from the Weather API
    //Weather data can be seen in the provided online application
    async function getWeather() {
        if (!todo) return
        try {
            const city = utilService.getCityName(todo.txt)
            if (!city) return
            const res = await todoService.getWeatherByCity(city)
            return { ...res.getWeather, city }
        } catch (err) {
            console.log(err)
        }
    }

    const goBack = () => {
        navigate('/')
    }

    return (
        <div className="todo-details">
            <div className='details-container'>
                <ImgContainer src={`https://res.cloudinary.com/dxwlsxl5s/image/upload/v1674463645/development-plan_ssmxfh.png`} alt={'details-img'} width={'400px'} divStyle={'details-img'} />
                <div className='details'>
                    {todo ? <>
                        <span>Todo: {todo.txt}</span>
                        <span>{utilService.createdAt(todo.createdAt)}</span>
                        <span>Status: {todo.isDone ? 'Completed' : 'Not completed yet'}</span>
                        {weather && <Weather weather={weather} />}
                    </> : <Loading />
                    }
                    <button onClick={goBack}>Back</button>
                </div>
            </div>
        </div>
    )
}    