import './App.css'
import Container from './elements/Container'
// import { Input } from './elements/Input'
// import { Title } from './elements/title'
import { ContainerNavProcess, Nav, Li, BarLine } from './elements/process/ContainerNavProcess'
import { ImgContainer } from './elements/StatusIMG'

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
    </Container>
  )
}

export default App
