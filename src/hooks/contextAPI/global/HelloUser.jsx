import { useEffect } from "react"
import { useGlobalContext } from "./context"

const HelloUser = () => {
  const { name } = useGlobalContext()

  useEffect(() => {
    console.log(name)
  }, [name])

  return <div>Hello </div>
}

export default HelloUser
