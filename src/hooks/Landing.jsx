import React from "react"
import UseState from "./useState/UseState"
import ToDoList from "./useState/ToDoList"
import UseEffect from "./useEffect/UseEffect"

import "./Landing.css"
import CleanUseEffect from "./useEffect/CleanUseEffect"
import UseRef from "./useRef/UseRef"
import Toggle from "./customHooks/Toogle"
import Navbar from "./contextAPI/final/context/Navbar"
import HelloUser from "./contextAPI/global/HelloUser"
import App from "./useMemo_useCallback/App"
import UseReducer from "./useReducer/UseReducer"
import UseTransition from "./useTransition/UseTransition"
import SuspenseAPI from "./suspenseAPI/SuspenseAPI"

const Landing = () => {
  return (
    <main>
      <SuspenseAPI />
    </main>
  )
}

export default Landing
