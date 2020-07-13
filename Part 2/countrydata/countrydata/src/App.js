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

const Display = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population}</div>
            <h2>Languages</h2>
            <ul>
                {country.languages.map(language =>
                    <li key={language.name}>{language.name}</li>
                )}
            </ul>
            <img src={country.flag} alt="Could not display"></img>
        </div>
    )
}

const Result = ({searchCountry, countries, handleButtonClick, setSelectedCountry}) => {
    console.log(searchCountry, "Result")
    const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(searchCountry))

    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if (countriesToShow.length === 1) {
        return (
            <Display country={countriesToShow[0]}/>
        )
    }
    else {
        return (
            <div>
                {countriesToShow.map(country =>
                    <form key={country.population} value={country.name} onSubmit={handleButtonClick}>
                        {country.name}
                        <button key={country.name} onClick={setSelectedCountry(country.name)} type="submit">show</button>
                    </form>
                )}
            </div>
        )
    }
}

const App = () => {
    const [searchCountry, setSearchCountry] = useState('')
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')

    const hook = () => {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {setCountries(response.data)})
    }

    useEffect(hook, [])

    const handleInputChange = (event) => setSearchCountry(event.target.value)
    const handleButtonClick = (event) => {
        event.preventDefault()
        //setSearchCountry(event.target)
        console.log(event.target.value, "country")
        console.log(selectedCountry, "selected country")
        console.log("Test")   
    }

    return (
        <div>
            <InputForm searchCountry={searchCountry} inputChange={handleInputChange}/>
            <Result searchCountry={searchCountry.toLowerCase()} countries={countries} handleButtonClick={handleButtonClick} setSelectedCountry={setSelectedCountry}/>
        </div>
    )
}

export default App