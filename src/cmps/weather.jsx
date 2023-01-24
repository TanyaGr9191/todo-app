export const Weather = ({ weather }) => (
    <div className="weather">
        <span>Weather Today: {weather.temperature.toFixed(2)} &#8451;</span>
        <span>City: {weather.city}</span>
        <span>Humidity: {weather.humidity}</span>
        <span>Description: {weather.description}</span>
    </div>
)