import React from 'react'

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

export default Courses