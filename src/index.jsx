import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import Landing from "./hooks/Landing"
import Axios from "./misc/Axios"
import ShortCircuit from "./misc/ShortCircuit"
import OptionalChaining from "./misc/OptionalChaining"
import ControlledInputs from "./forms/ControlledInputs"
import OtherInputs from "./forms/OtherInputs"
import UncontrolledInputs from "./forms/UncontrolledInputs"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
)
