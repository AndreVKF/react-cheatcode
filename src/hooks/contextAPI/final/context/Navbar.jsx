import { createContext } from "react"
import { useContext } from "react"
import { useState } from "react"
import NavLinks from "./NavLinks"

export const NavbarContext = createContext()
// returns two components
// Provider - wrap return in Parent Component
// Consumer - replaced by useContext() hook

// custom hook => makes it easir to call
export const useAppContext = () => {
  return useContext(NavbarContext)
}

const Navbar = () => {
  const [user, setUser] = useState(null)
  const logout = () => {
    setUser(null)
  }

  const handleClick = () => {
    setUser({ name: "Lupet" })
  }

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
      {!user && (
        <button type="button" onClick={handleClick}>
          Login
        </button>
      )}
    </NavbarContext.Provider>
  )
}
export default Navbar
