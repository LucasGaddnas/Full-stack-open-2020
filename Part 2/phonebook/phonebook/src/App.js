import React, { useState } from 'react'
import Persons from './components/persons'
import Form from './components/form'
import Filter from './components/filter'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-1234567' }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filter, setFilter ] = useState('')

    const addName = (event) => {
        event.preventDefault()
        persons.forEach((person) => {
            if (person.name === newName) {
                alert(`${newName} is already added to phonebook`)
            }
            else if (person.name === '' || person.number === '') {
                alert('Fill all inputfields')
            }
            else {
                const person = { name: newName, number: newNumber }
                setPersons(persons.concat(person))
                setNewName('')
                setNewNumber('')
            }
        })
    }
    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)
    const handleFilterChange = (event) => setFilter(event.target.value)
    

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} handleFilterChange={handleFilterChange}/>
            <h2>Add new</h2>
            <Form addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
            <h2>Numbers</h2>
            <Persons persons={persons} filter={filter}/>
        </div>
    )
}

export default App