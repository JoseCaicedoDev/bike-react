import React from 'react'
import Container from '../elements/Container'
import ContainerHome from '../elements/ContainerHome'
import Button from '../elements/Button'
import ContainerInputUser from '../components/ContainerInputUser'
import imageB from '../resources/images/Ellipse 1.png'
import { LinkElement, Image } from '../elements/user/InputUser'

function HomeUser () {
  return (
    <>
      <Container>
        <ContainerHome>
          <Image src={imageB} />
          <ContainerInputUser
            placeholder='hola'
            type='text'
            name='prueba'
            content='Id empleado'

          />
          <ContainerInputUser
            placeholder='******'
            type='password'
            name='prueba1'
            content='Contraseña'
          />
          <Button>Ingresar</Button>
          <LinkElement to='/'>Ayuda</LinkElement>
        </ContainerHome>
      </Container>
    </>
  )
}

export default HomeUser
