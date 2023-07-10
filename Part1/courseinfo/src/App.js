
const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React' , 'Using props to pass data','State of a component']
  const exercises = [ 10 , 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content part={parts} exercises={exercises} />
      <Total totalExercises = {exercises[0] + exercises[1] + exercises[2]} />
    </div>
  )
}


const Header = (props) => {
  return(
  <div>
        <h1>{props.course}</h1>
  </div>
  )
  }
  
  const Content = (props) => {
    return(
    <div>
      <Part part={props.part[0]} exercises={props.exercises[0]} />
      <Part part={props.part[1]} exercises={props.exercises[1]} />
      <Part part={props.part[2]} exercises={props.exercises[2]} />
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