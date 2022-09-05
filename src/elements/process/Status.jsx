import React from 'react'
import Container from '../Container'
import { ContainerNavProcess, Nav, Li, BarLine, BarLine1 } from './ContainerNavProcess'
import { ImgContainer, Img } from '../StatusIMG'
import { TitleState } from '../TitleState'

function Status (props) {
  return (
    <Container>
      <ContainerNavProcess>
        <Nav>
          <Li check={props.CurrentStatus >= 1 || props.CurrentStatus < 4} />
          <Li check={props.CurrentStatus > 1 || props.CurrentStatus <= 4} />
          <Li check={props.CurrentStatus >= 3} />
          <Li check={props.CurrentStatus === 4} />
          <BarLine1 />
          <BarLine line={props.CurrentStatus} />
        </Nav>
      </ContainerNavProcess>
      <ImgContainer><Img src={props.imgurl} alt='#' /></ImgContainer>
      <TitleState>{props.title}</TitleState>
      <TitleState><a href='/' target='_blank' rel='noopener noreferrer nofollow'>Contacte al Mecánico</a></TitleState>
    </Container>
  )
}

export default Status
