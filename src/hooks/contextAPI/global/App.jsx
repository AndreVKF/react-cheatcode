import React from "react"
import HelloUser from "./HelloUser"
import AppContext from "./context"

const App = () => {
  return (
    <>
      <AppContext>
        <HelloUser />
      </AppContext>
    </>
  )
}

export default App
