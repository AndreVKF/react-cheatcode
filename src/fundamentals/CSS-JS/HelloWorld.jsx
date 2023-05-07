import React from "react"

// css on JSC as style arg => pass in object with properties on CamelCase
// jsx only accepts expression and not statements

const HelloWorld = () => {
  const helloWorld = "hello world"

  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#bbb" }}>
        {helloWorld}
      </div>{" "}
      {/* correct */}
      {/* <div style={{ display: "flex", backgroundColor: "#bbb" }}>
        {helloWorld = "new Hello World"}
      </div>{" "} */}
      {/* wrong */}
    </>
  )
}

export default HelloWorld
