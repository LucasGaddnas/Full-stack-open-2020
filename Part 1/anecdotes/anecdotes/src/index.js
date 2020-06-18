import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  const [highest, setHighest] = useState(0)
  const [indexOfHighest, setIndexOfHighest] = useState(0)

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    copy.forEach((value, index) => {
      if (value > highest) {
        setHighest(value)
        setIndexOfHighest(index)
      }
    })
  }

  return (
    <div>
      <h1>Current anecdote</h1>
      {props.anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <button onClick={vote}>Vote</button>
      <button onClick={randomAnecdote}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[indexOfHighest]}
      <p>has {highest} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)