import React, {useState, useEffect} from 'react'
import axios from 'axios'

const InputForm = ({country, inputChange}) => {
    return (
        <div>
            <form>
                Find countries
                <input value={country} onChange={inputChange}/>
            </form>
        </div>
    )
}

const Result = ({searchCountry, countries}) => {
    const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(searchCountry.toLowerCase()))

    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if (countriesToShow.length === 1) {
        return (
            <div>
                <h1>{countriesToShow[0].name}</h1>
                <div>Capital: {countriesToShow[0].capital}</div>
                <div>Population: {countriesToShow[0].population}</div>
                <h2>Languages</h2>
                <ul>
                    {countriesToShow[0].languages.map(language =>
                        <li key={language.name}>{language.name}</li>
                    )}
                </ul>
                <img src={countriesToShow[0].flag} alt="Could not display"></img>
            </div>
        )
    }
    else {
        return (
            <div>
                {countriesToShow.map(country =>
                    <div key={country.name}>{country.name}</div>
                )}
            </div>
        )
    }
}

const App = () => {
    const [searchCountry, setSearchCountry] = useState('')
    const [countries, setCountries] = useState([])

    const hook = () => {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {setCountries(response.data)})
    }

    useEffect(hook, [])

    const handleInputChange = (event) => setSearchCountry(event.target.value)

    return (
        <div>
            <InputForm searchCountry={searchCountry} inputChange={handleInputChange}/>
            <Result searchCountry={searchCountry} countries={countries}/>
        </div>
    )
}

export default App