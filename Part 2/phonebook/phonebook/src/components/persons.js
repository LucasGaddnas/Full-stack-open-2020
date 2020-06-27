import React from 'react'

const Persons = ({persons, filter}) => {
    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            {personsToShow.map(person =>
                <div key={person.name}>{person.name} {person.number}</div>
            )}
        </div>
    )
}

export default Persons