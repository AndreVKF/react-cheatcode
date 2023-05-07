import React from "react"

const BookForm = () => {
  const handleFormInput = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form submit")
  }

  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "10px 5px" }}
        />
        <button type="submit">Submit Form</button>
      </form>
    </section>
  )
}

export default BookForm
