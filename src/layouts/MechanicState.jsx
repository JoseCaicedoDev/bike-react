import React from 'react'
import Container from '../elements/Container'
import { ContainerTitle, Title } from '../elements/Title'
import { ImgContainerState, Img } from '../elements/StatusIMG'
import Image3 from '../resources/images/Ellipse 1.png'
import CardState from '../components/CardState'
import Modal from '../components/Modal'
// import useGetClient from '../hooks/useGetClient'

function MechanicState () {
/*   const [client, setClient] = useState()
  useEffect(() => {
    function setClientt () {
      setClient(useGetClient)
    }
    setClientt()
  }, [])
  console.log(client) */
  return (
    <>
      <Container>
        <ImgContainerState><Img src={Image3} alt='#' /></ImgContainerState>
        <ContainerTitle>
          <Title>Pepito Gonzales </Title>
        </ContainerTitle>
        <CardState
          ticketNumber='146876'
          textBtn='lavado'
        />
        <CardState
          ticketNumber='146876'
          textBtn='Revisión'
        />
        <CardState
          ticketNumber='146876'
          textBtn='Mantenimiento'
        />
        <CardState
          ticketNumber='146876'
          textBtn='Terminado'
        />
      </Container>
      <Modal />
    </>
  )
}

export default MechanicState
