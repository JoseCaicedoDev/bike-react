import React from 'react'
import Container from '../elements/Container'
import ContainerHome from '../elements/ContainerHome'
// import ContainerHome from '../elements/ContainerHome'
import Button from '../elements/Button'
import ContainerInputUser from '../components/ContainerInputUser'
import imageA from '../resources/images/bike1.png'
import { LinkElement, Image, ImageLogo } from '../elements/user/InputUser'
import Logo from '../resources/images/Logo.png'

function HomeClient () {
  return (
    <>
      <Container>
        <ContainerHome>
          <ImageLogo src={Logo} />
          <Image src={imageA} />
          <ContainerInputUser
            placeholder='3289298'
            type='text'
            name='prueba'
            content='Ingrese número de ticket'
          />
          <ContainerInputUser
            placeholder='123123'
            type='text'
            name='prueba'
            content='Ingrese su identificación'
          />
          <Button>Ingresar</Button>
          {/*           <LinkElement href='/'>Ayuda</LinkElement> */}
          <LinkElement to='/'>Ayuda</LinkElement>
        </ContainerHome>
      </Container>
    </>
  )
}

export default HomeClient
