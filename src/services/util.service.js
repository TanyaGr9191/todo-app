import { CITY_NAMES } from "./constants"

export const utilService = {
    createdAt,
    getCityName
}

function getCityName(txt) {
    if (!txt) return
    return CITY_NAMES.find(city => txt.toLowerCase().includes(city.toLowerCase()));
}

function createdAt(time) {
    const newDate = new Date(time)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1
    const date = newDate.getDate()
    let hours = newDate.getHours()
    hours = hours % 12
    hours = hours ? hours : 12
    const minutes = newDate.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const monthToDisplay = (month + '').padStart(2, '0')
    const dateToDisplay = (date + '').padStart(2, '0')
    const hoursToDisplay = (hours + '').padStart(2, '0')
    const minutesToDisplay = (minutes + '').padStart(2, '0')

    return ` Created date: ${dateToDisplay}/${monthToDisplay}/${year} Time: ${hoursToDisplay}:${minutesToDisplay} ${ampm}`
}