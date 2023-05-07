import UserContainer from "./UserContainer"

const NavLinks = ({ user, logout }) => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  )
}
export default NavLinks
