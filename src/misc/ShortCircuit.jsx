import React, { useState } from "react"

// ! negation
// || default values
// && conditional component
// ? : ternary operator

const ShortCircuit = () => {
  // falsy
  const [text, setText] = useState("")

  // truthy
  const [name, setName] = useState("susan")

  const [editing, setEditing] = useState(false)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>Falsy OR: {text || "hello world"}</h4>
      <h4>Falsy AND: {text && "hello world"}</h4>
      <h4>Truthy OR: {name || "hello world"}</h4>
      <h4>Truthy AND: {name && "hello world"}</h4>
      <button type="button" onClick={() => setEditing(!editing)}>
        Toggle Edit
      </button>
      {!editing ? (
        <h1>Not Editing</h1>
      ) : (
        <h1 style={{ color: "firebrick" }}>Is Edited :)</h1>
      )}
    </div>
  )
}

export default ShortCircuit
