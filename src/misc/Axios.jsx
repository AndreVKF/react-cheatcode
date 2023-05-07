import axios from "axios"
import React, { useEffect, useState } from "react"

const url = "https://api.github.com/users/AndreVKF"

const Axios = () => {
  const [user, setUser] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    // can create outside of useEffect => but should no be passed as a dependency
    const fetchUser = async () => {
      setIsError(false)
      try {
        const resp = await axios.get(url)
        const user = await resp.data
        setUser(user)
      } catch (err) {
        setIsError(true)
      }
    }

    fetchUser()
  }, [])

  return (
    <div>
      {user && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={user.avatar_url}
            alt="avatar"
            style={{ marginTop: "50px", width: "150px", borderRadius: "25px" }}
          />
          <h3>{user.login}</h3>
        </div>
      )}
    </div>
  )
}

export default Axios
