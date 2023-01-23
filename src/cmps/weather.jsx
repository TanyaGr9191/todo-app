export const Weather = ({ weather }) => {

    return (
        <div className="weather">
            <div className="description">
                <span>Weather Today: {weather.main}</span>
                <span>City: {weather.city}</span>
                <span>Description: {weather.description}</span>
            </div>
            <div className="img-container">
                <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weather.main} />
            </div>
        </div>
    )
}