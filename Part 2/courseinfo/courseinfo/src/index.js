import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, cur) => {
    return {exercises: acc.exercises + cur.exercises}
  })
  return(
    <h4>Number of exercises {sum.exercises}</h4>
  ) 
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => 
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>  
      )}
    </div>
  )
}

const Courses = ({courses}) => {
  return (
    <div>
      {courses.map(course => 
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <Courses courses={courses} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))