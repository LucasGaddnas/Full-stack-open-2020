import axios from 'axios'
const url = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const add = newContact => {
    const request = axios.post(url, newContact)
    return request.then(response => response.data)
}

export default {getAll, add}