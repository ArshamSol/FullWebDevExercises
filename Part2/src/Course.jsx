
const Header = ({ courseName }) => {
    return <h2>{courseName}</h2>;
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} - {part.exercises} exercises
      </p>
    );
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    );
  }
  
  const Course = ({ course }) => {
    const { name, parts } = course;
  // Calculate the sum of exercises using reduce
  
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  
    return (
      <div>
        <Header courseName={name} />
        <Content parts={parts} />
        <p>Total exercises: {totalExercises}</p>
      </div>
    );
  }

  export default Course;