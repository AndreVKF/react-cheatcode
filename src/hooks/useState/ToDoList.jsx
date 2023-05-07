import React from "react"
import { useState } from "react"

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([])
  const [toDoText, setToDoText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setToDoList([...toDoList, ...[toDoText]])
    setToDoText("")
  }

  const clearToDoList = () => {
    setToDoList([])
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="toDo">
          Enter To Do:{" "}
          <input
            type="text"
            id="toDo"
            value={toDoText}
            onChange={(e) => setToDoText(e.target.value)}
          />{" "}
        </label>
        <button type="submit">Add ToDo</button>
      </form>

      {toDoList.length !== 0 && (
        <>
          <ul>
            {toDoList.map((toDo, index) => {
              return <li key={index}>{toDo}</li>
            })}
          </ul>
          <button type="button" onClick={clearToDoList} className="btn">
            Clear ToDo List
          </button>
        </>
      )}
    </div>
  )
}

export default ToDoList
