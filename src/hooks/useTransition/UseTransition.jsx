import React from "react"
import { useState, useTransition } from "react"

const UseTransition = () => {
  const [text, setText] = useState("")
  const [items, setItems] = useState([])
  const [isPending, startTransition] = useTransition()

  const handleChange = (e) => {
    setText(e.target.value)
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <h1>`Teste: ${index}`</h1>
          </div>
        )
      })
      setItems(newItems)
    })
  }

  return (
    <section>
      <form>
        <input type="text" value={text} onChange={handleChange} />
      </form>
      <h4>Item below</h4>
      {isPending ? (
        <h4>Loading</h4>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}
    </section>
  )
}

export default UseTransition
