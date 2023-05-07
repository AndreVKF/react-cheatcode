import React from "react"
import { useState, useReducer } from "react"
import { CLEAR_LIST, RESET_LIST, REMOVE_ID } from "./actions"
import reducer from "./reducer"
import data from "../../misc/data.js"

const defaultState = {
  people: data,
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ID, payload: id })
  }

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        )
      })}

      {state.people.length >= 1 ? (
        <button type="button" onClick={clearList} className="btn">
          Clear List
        </button>
      ) : (
        <button type="button" onClick={resetList} className="btn">
          Reset
        </button>
      )}
    </div>
  )
}

export default UseReducer
