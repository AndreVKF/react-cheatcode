import React from "react"

const Person = ({ person, removePerson }) => {
  return (
    <div>
      <h4>{person.name}</h4>
      <button onClick={() => removePerson(person.id)}>Remove</button>
    </div>
  )
}

export default Person
