import { useEffect, useState } from "react"

import { RallyApi, RallySchema } from "@/.openapi/api"

export const useFetchRallies = () => {
  const ralliesApi = new RallyApi()
  const [rallies, setRallies] = useState<RallySchema[]>([])

  useEffect(() => {
    ralliesApi.getRallies().then((response) => {
      setRallies(response.data)
    })
  }, [])

  return rallies
}