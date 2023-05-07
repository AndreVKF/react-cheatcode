import React, { useState } from "react"

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    // e.currentTarget => element that dom is listening
    // e.target => dom element that targets change
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    // console.log(formData)
    // console.log({ name, email, password })
    // console.log([...formData.entries()])
    const newUser = Object.fromEntries(formData)
    console.log(newUser)
    e.currentTarget.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Controlled Inputs</h4>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Add User</button>
      </form>
    </>
  )

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   console.log(name, email)
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <h4>Controlled Inputs</h4>
  //     <div>
  //       <label htmlFor="name">name</label>
  //       <input
  //         type="text"
  //         id="name"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="email">email</label>
  //       <input
  //         type="email"
  //         id="email"
  //         value={email}
  //         onChange={(e) => {
  //           setEmail(e.target.value)
  //         }}
  //       />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )
}

export default UncontrolledInputs
