import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetMechanic = async () => {
  const [mechanics, setMechanics] = useState([])
  const url = 'https://api-biker-production.up.railway.app/api/mechanic'

  useEffect(() => {
    const res = axios.get(url)

    res.then((mechanic) => {
      console.log(mechanic.data)
      setMechanics(mechanic.data)
    })
      .catch((err) => { console.log(err) })
  }, [])

  return mechanics
}

export default useGetMechanic
