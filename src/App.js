import './App.css'
import Container from './elements/Container'
// import { Input } from './elements/Input'
// import { Title } from './elements/title'
import { ContainerNavProcess, Nav, Li, BarLine } from './elements/process/ContainerNavProcess'
import { ImgContainer } from './elements/StatusIMG'
import { TitleState } from './elements/TitleState'

function App () {
  return (
    <Container>
      <ContainerNavProcess>
        <Nav>
          <Li check />
          <Li />
          <Li />
          <Li />
          <BarLine />
        </Nav>
      </ContainerNavProcess>
      <ImgContainer />
      <TitleState>Su vehiculo ha sido recibido</TitleState>
      <TitleState><a href='/' target='_blank' rel='noopener noreferrer nofollow'>Contacte al Mecanico</a></TitleState>
    </Container>
  )
}

export default App
