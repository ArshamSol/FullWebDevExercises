
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content part={course.parts} />
      <Total totalExercises = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}


const Header = (props) => {
  return(
  <div>
        <h1>{props.courseName}</h1>
  </div>
  )
  }
  
  const Content = (props) => {
    return(
    <div>
      <Part part={props.part[0].name} exercises={props.part[0].exercises} />
      <Part part={props.part[1].name} exercises={props.part[1].exercises} />
      <Part part={props.part[2].name} exercises={props.part[2].exercises} />
    </div>
    )
    }

  const Part  = (props) => {
    return(
  <div>
    <p>
      {props.part} {props.exercises}
    </p>
  </div>
  )
  }
  const Total  = (props) => {
    return(
  <div>
      <p>Number of exercises {props.totalExercises}</p>
  </div>
    )
  }



export default App