import React from "react"

import users from "./data"

const OptionalChaining = () => {
  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <h2>{user?.last_name || "Last"}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default OptionalChaining
