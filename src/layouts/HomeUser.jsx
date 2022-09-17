import React from 'react'
import Container from '../elements/Container'
import ContainerHome from '../elements/ContainerHome'
import Button from '../elements/Button'
import ContainerInputUser from '../components/ContainerInputUser'
import imageB from '../resources/images/bike14.png'
import { Image, ImageLogo } from '../elements/user/InputUser'
import Logo from '../resources/images/Logo.png'

function HomeUser () {
  return (
    <>
      <Container>
        <ContainerHome>
          <ImageLogo src={Logo} />
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
        </ContainerHome>
      </Container>
    </>
  )
}

export default HomeUser
