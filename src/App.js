import './App.css'
// import Container from './elements/Container'
import Button from './elements/Button'
import useGetMechanic from './hooks/useGetMechanic'
import useGetClient from './hooks/useGetClient'
import useGetListProducts from './hooks/useGetListProducts'

function App () {
  const mechanics = useGetMechanic()
  console.log(mechanics)

  const clients = useGetClient()
  console.log(clients, 'hola')

  const product = useGetListProducts()
  console.log(product, 'j')

  return (
    <>
      <Button secondary>Soy un boton!!! y no necesito tu aprobacion!!!</Button>
      {
        clients.length > 0 ? <p>{clients[0].name}</p> : <p>cosa</p>
      }
    </>
  )
}

export default App
