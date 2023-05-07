import React from "react"
import { useState, useTransition, Suspense, lazy } from "react"
const SlowComponent = lazy(() => import("./SlowComponent"))

const SuspenseAPI = () => {
  const [text, setText] = useState("")
  const [items, setItems] = useState([])
  const [isPending, startTransition] = useTransition()
  const [show, setShow] = useState(false)

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
      {/* only imports logic on button click */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <Suspense fallback={<h4>Loadin..</h4>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  )
}

// migh Suspense full return to a callback

export default SuspenseAPI
