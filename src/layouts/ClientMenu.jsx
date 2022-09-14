import React, { useEffect, useState } from 'react'
import Button from '../elements/Button'
import Container from '../elements/Container'
import { Img, ImgContainer } from '../elements/StatusIMG'
import { ContainerTitle, Title } from '../elements/Title'
import { TitleState } from '../elements/TitleState'
import bike from '../resources/images/bike2.png'
import useGetClient from '../hooks/useGetClient'

function ClientMenu () {
  const [ticketId, setTicketId] = useState()
  const clients = useGetClient()

  useEffect(() => {
    setTicketId(charged())
  }, [clients])

  const charged = () => {
    let result
    if (clients.length !== 0) {
      result = clients[2].ticketID
    }
    return result
  }
  return (
    <>
      <Container>
        <ImgContainer>
          <Img src={bike} />
        </ImgContainer>
        <ContainerTitle>
          <Title>Ticket: {ticketId}</Title>
        </ContainerTitle>
        <Button margin>Ver Estado</Button>
        <Button margin>Ver Factura</Button>
        <Button margin>Market</Button>
        <TitleState><a href='/' target='_blank' rel='noopener noreferrer nofollow'>Contacte al Mecánico</a></TitleState>
      </Container>
    </>
  )
}

export default ClientMenu
