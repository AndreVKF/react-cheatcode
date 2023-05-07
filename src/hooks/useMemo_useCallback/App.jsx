import React from "react"
import { useState, useCallback, useMemo } from "react"

import List from "./List"
import data from "../../misc/data"

const App = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id)
      setPeople(newPeople)
    },
    [people]
  ) // useEffect but with function => can pass a dependency array
  // controls creation of a function

  const slowFunction = () => {
    let value = 0
    for (let i = 0; i < 10000000; i++) {
      value++
    }

    return value
  }

  const value = useMemo(() => slowFunction(), []) // stores return value for function to not be executed all the time
  // uses dependency array

  console.log(value)
  return (
    <section>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

export default App
