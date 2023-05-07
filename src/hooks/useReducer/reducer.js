import { CLEAR_LIST, RESET_LIST, REMOVE_ID } from "./actions"
import data from "../../misc/data.js"

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] }

    case RESET_LIST:
      return { ...state, people: data }

    case REMOVE_ID:
      let newPeople = state.people
      newPeople = newPeople.filter((person) => person.id !== action.payload)
      return { ...state, people: newPeople }

    default:
      throw new Error("Action type unknown!!")
  }
}

export default reducer
