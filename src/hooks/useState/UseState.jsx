import React from "react"

import { useState } from "react"

// state managament for applications

const UseState = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevCount) => {
      return prevCount + 1
    })
  }

  return (
    <div>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Add Count
      </button>
    </div>
  )
}

export default UseState
