import { useState, useEffect } from 'react'
import axios from 'axios'

function useGetClient () {
  const [clients, setClients] = useState([])
  const url = 'https://api-biker-production.up.railway.app/api/'

  useEffect(() => {
    const listClient = async () => {
      const res = await axios.get(url)
      setClients(res.data)
    }
    listClient()
  }, [])

  return clients
}

export default useGetClient
