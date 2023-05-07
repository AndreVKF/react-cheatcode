import React from "react"
import { useState } from "react"
import useToggle from "./useToogle"

const Toogle = () => {
  const { show, toggle } = useToggle(true)

  return (
    <div>
      <h4>Toggle Custom Hooke</h4>
      <button onClick={toggle}>Toggle</button>
      {show && <h4>Some Stuff</h4>}
    </div>
  )
}

export default Toogle
