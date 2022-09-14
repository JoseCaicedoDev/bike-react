// import React, { useState, useEffect } from 'react'

import Button from '../elements/Button'
import Container from '../elements/Container'
import { ContainerContainer } from '../elements/PhotoMarket'
import { ContainerTitle, Title } from '../elements/Title'
import { Fakehook } from '../functions/Fakehook'
import PieceShop from './PieceShop'

function Marketplacer () {
  const imgObject = Fakehook()

  const Piece = imgObject.map((pieza) => {
    console.log(pieza.img.img)
    return (
      <PieceShop key={pieza.id} pieza={pieza} />
    )
  })

  return (
    <Container>
      <ContainerTitle>
        <Title>MarketPlacer</Title>
      </ContainerTitle>
      <ContainerContainer>
        {Piece}
      </ContainerContainer>
      <Button>Comprar</Button>
    </Container>
  )
}

export default Marketplacer
