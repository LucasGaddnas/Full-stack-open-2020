import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handle, text}) => {
  return (
    <>
      <button onClick={handle}>
        {text}
      </button>
    </>
  )
}

const Statistic = ({text, value, unit}) => {
  if (unit === "") {
    return (
      <tr>
        <td>{text}:</td>
        <td>{value}</td>
      </tr>
    )
  }
  else {
    return (
      <tr>
        <td>{text}:</td>
        <td>{value} {unit}</td>
      </tr>
    )
  }
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all === 0) {
    return (
      <div>
        <h3>No feedback given</h3>
      </div>
    )
  }
  else {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <Statistic text="Good" value={good}/>
            <Statistic text="Neutral" value={neutral}/>
            <Statistic text="Bad" value={bad}/>
            <Statistic text="All" value={all}/>
            <Statistic text="Average" value={average}/>
            <Statistic text="Positive" value={positive} unit="%"/>
          </tbody>
        </table>
      </>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    setAll(all + 1)
    setGood(good + 1)
    setAverage((good + 1 - bad) / (all + 1))
    setPositive((good + 1) / (all + 1) * 100)
  }
  const handleNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
    setAverage((good - bad) / (all + 1))
    setPositive((good) / (all + 1) * 100)
  }
  const handleBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
    setAverage((good - bad - 1) / (all + 1))
    setPositive((good) / (all + 1) * 100)
  }

  return (
    <div>
      <h1>Feedback</h1>
      <Button handle={handleGood} text="Good"/>
      <Button handle={handleNeutral} text="Neutral"/>
      <Button handle={handleBad} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}
      all={all} average={average} positive={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)