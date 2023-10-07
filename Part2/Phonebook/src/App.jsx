import { useState, useEffect } from 'react'
import axios from 'axios'



const Filter = ({ searchTerm, handleSearchTermChange }) =>  {
  return (<div>
  Filter shown with: <input
    value={searchTerm}
    onChange={handleSearchTermChange}
  />
</div>)
}

const PersonForm = ({newName, newPhone, handleNameChange, handlePhoneChange, handleSubmit}) =>  {
  return (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input 
      value={newName}
      onChange={handleNameChange}
      />
    </div>
    
    <div>number: <input  
          value={newPhone}
          onChange={handlePhoneChange}/></div>
    <div>
      <button type="submit" >add</button>
    </div>
  </form>
  )
}

const Persons = ({ persons }) => {
  return (
    <ul>
    {persons.map((person, index) => (
      <li key={index}>{person.name} {person.number}</li>
    ))}
  </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  

  const addPerson = (event) => {
    event.preventDefault();

    // Check if the newName already exists in the phonebook
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {

      setPersons(persons.concat({ name: newName , number: newPhone }));
      
      setNewName('');
      setNewPhone('');
    }
  };
  
  console.log(persons);
  const filteredPersons = persons.filter((person) =>
  person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />

      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        handleSubmit={addPerson}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App