import React, { useState, useRef, useEffect } from "react"

const UseRef = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return // functionality for second render
    }
    // refContainer.current.focus() DOM work
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = refContainer.current.value
    console.log(name, refContainer)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref={refContainer} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  )
}

export default UseRef
