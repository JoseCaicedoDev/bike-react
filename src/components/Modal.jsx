import React from 'react'
import Button from '../elements/Button'
import { ContainerModal, ContainerModalContent, TextModal, ContainerButton } from '../elements/ModalStyle'

function Modal (props) {
  return (
    <>
      <ContainerModal>
        <ContainerModalContent>
          <TextModal>¿Está seguro de enviar esa actualización?</TextModal>
          <ContainerButton>
            <Button size='1.4rem' width='10rem' secondary>Enviar</Button>
            <Button size='1.4rem' width='10rem' secondary>Cancelar</Button>
          </ContainerButton>
        </ContainerModalContent>
      </ContainerModal>
    </>
  )
}

export default Modal
