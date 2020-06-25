import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-1234567' }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')

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
    const handleNameCHange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)

    return (
        <div>
            <h2>Phonebook</h2>
                <form onSubmit={addName}>
                    <div>
                        name:
                        <input
                            value={newName} onChange={handleNameCHange}
                        />
                    </div>
                    <div>
                        number: 
                        <input
                            value={newNumber} onChange={handleNumberChange}
                        />
                    </div>
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person =>
                    <div key={person.name}>{person.name} {person.number}</div>
                )}
            </div>
        </div>
    )
}

export default App