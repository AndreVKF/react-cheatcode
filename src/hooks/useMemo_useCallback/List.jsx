import React from "react"
import { memo } from "react"

import Person from "./Person"

const List = ({ people, removePerson }) => {
  return (
    <ul>
      {people.map((person, index) => {
        return (
          <Person key={index} person={person} removePerson={removePerson} />
        )
      })}
    </ul>
  )
}

export default memo(List)
