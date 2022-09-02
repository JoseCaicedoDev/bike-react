import React from 'react'
import Container from '../elements/Container'
import { ContainerNavProcess, Nav, Li, BarLine } from '../elements/process/ContainerNavProcess'
import { ImgContainer, Img } from '../elements/StatusIMG'
import { TitleState } from '../elements/TitleState'

function Status (props) {
  return (
    <Container>
      <ContainerNavProcess>
        <Nav>
          <Li check={props.CurrentStatus === 1} />
          <Li check={props.CurrentStatus === 2} />
          <Li check={props.CurrentStatus === 3} />
          <Li check={props.CurrentStatus === 4} />
          <BarLine />
        </Nav>
      </ContainerNavProcess>
      <ImgContainer><Img src={props.imgurl} alt='#' /></ImgContainer>
      <TitleState>{props.title}</TitleState>
      <TitleState><a href='/' target='_blank' rel='noopener noreferrer nofollow'>Contacte al Mecanico</a></TitleState>
    </Container>
  )
}

export default Status
