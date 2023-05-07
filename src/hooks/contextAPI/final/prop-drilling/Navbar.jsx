import { useState } from "react"
import NavLinks from "./NavLinks"

const Navbar = () => {
  const [user, setUser] = useState(null)
  const logout = () => {
    setUser(null)
  }
  const handleClick = () => {
    setUser({ name: "Lupet" })
  }

  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
      {!user && (
        <button type="button" onClick={handleClick}>
          Login
        </button>
      )}
    </nav>
  )
}
export default Navbar
