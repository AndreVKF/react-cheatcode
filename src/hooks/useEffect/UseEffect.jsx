import React from "react"

// side effects in function components (subscriptions, fetching data, directly updating DOM, event listeners, ...)
// accepts two arguments (second optional)
// first argument - cb function
// second argument - dependency array
// by default runs on each render
// cb can't return promise (can't be make it async)
// if dependency array = [], only runs at first render

import { useState, useEffect } from "react"

const url = "https://api.github.com/users"

const UseEffect = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users)
    }

    fetchData()
  }, [])

  return (
    <section>
      {users && (
        <ul>
          {users.map((user, index) => {
            return (
              <div>
                <h3>{user.login}</h3>
                <h3>{user.type}</h3>
                <img
                  src={user.avatar_url}
                  alt="avatar img"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default UseEffect
