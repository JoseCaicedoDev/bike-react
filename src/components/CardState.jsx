import React from 'react'
import Button from '../elements/Button'
import { ContainerState, TextState } from '../elements/ContainerState'

function CardState (props) {
  return (
    <>
      <ContainerState>
        <TextState>Ticket: {props.ticketNumber}</TextState>
        <Button size='1.4rem' width='12.5rem' secondary>{props.textBtn}</Button>
      </ContainerState>
    </>
  )
}

export default CardState
