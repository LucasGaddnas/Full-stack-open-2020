import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
      <button onClick={handleGood}>
        Good
      </button>
      <button onClick={handleNeutral}>
        Neutral
      </button>
      <button onClick={handleBad}>
        Bad
      </button>
      <h1>Stats</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)