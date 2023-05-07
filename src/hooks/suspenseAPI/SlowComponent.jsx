import React from "react"

const SlowComponent = () => {
  return (
    <div>
      {Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <h2>`Teste: ${index}`</h2>
          </div>
        )
      })}
    </div>
  )
}

export default SlowComponent
