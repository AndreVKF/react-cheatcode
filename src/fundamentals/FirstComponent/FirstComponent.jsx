import React from "react"
import "./FirstComponent.css"

// components must start with "Capital"
// must return one, and only one, parent html component (div, section, article)
// may use React fragment (<></> for group components)
const FirstComponent = () => {
  return (
    <section className="first-component">
      <p>Hello World</p>
    </section>
  )
}

export default FirstComponent
