import { useState, useEffect } from 'react'
import axios from 'axios'

function useGetListProducts () {
  const [products, setProducts] = useState([])
  const url = 'https://api-biker-production.up.railway.app/api/list'

  useEffect(() => {
    const listProduct = async () => {
      const res = await axios.get(url)
      setProducts(res.data)
      // console.log(res.data)
      // console.log(setProducts)
      /* res.then((list) => {
      }).catch((error) => console.log(error)) */
    }
    listProduct()
  }, [])
  return products
}

export default useGetListProducts
