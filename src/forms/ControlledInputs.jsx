import React, { useState } from "react"

const ControlledInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  })

  const clearUser = () => {
    setUser({
      name: "",
      email: "",
    })
  }

  const [data, setData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user.name || !user.email) return

    let newData = data
    newData.push(user)
    setData(newData)
    clearUser()
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Controlled Inputs</h4>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
      {data.length > 0 && (
        <div>
          {data.map((user, index) => {
            return (
              <div key={index}>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
              </div>
            )
          })}
        </div>
      )}
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

export default ControlledInputs
