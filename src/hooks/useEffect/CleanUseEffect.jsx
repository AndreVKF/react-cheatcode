import React, { useState, useEffect } from "react"

const CleanUseEffect = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <EventListenerComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    console.log("Teste")
    const intId = setInterval(() => {
      console.log("hello from interval")
    }, 1000)

    return () => {
      clearInterval(intId)
    }
  }, []) // renders twice because because of update of state even if dependency array is empty

  return <h1>Hello There</h1>
}

const EventListenerComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      console.log("test")
    }
    window.addEventListener("scroll", someFunc)

    return () => window.removeEventListener("scroll", someFunc)
  }, [])

  return <h1>Event Listener</h1>
}

export default CleanUseEffect
