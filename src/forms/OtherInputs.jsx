import React, { useState } from "react"

const frameworks = ["react", "angular", "vue", "svelte"]

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false)
  const [framework, setFramework] = useState("react")

  const handleShipping = (e) => {
    setShipping(e.target.checked)
  }

  const handleFramework = (e) => {
    setFramework(e.target.value)
  }

  return (
    <div>
      <form>
        <h4>Other Inputs</h4>
        <div>
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>

        <div>
          <label htmlFor="framework">Framework</label>
          <select name="framework" id="framework">
            {frameworks.map((fwk, index) => {
              return (
                <option
                  value={framework}
                  key={index}
                  onChange={handleFramework}
                >
                  {fwk}
                </option>
              )
            })}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default OtherInputs
