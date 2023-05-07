import React from "react"
import { useEffect, useState } from "react"

const useFetchData = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }

        const reqData = await resp.json()
        setData(reqData)
      } catch (err) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  return { isLoading, isError, data }
}

export default useFetchData
