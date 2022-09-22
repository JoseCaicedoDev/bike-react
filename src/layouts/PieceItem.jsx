import Container from '../elements/Container'
import imageB from '../resources/images/bike3.png'
import { LinkElement } from '../elements/user/InputUser'
import Button from '../elements/Button'
import { ContainerTitle, Title, TitleSecondary } from '../elements/Title'
import { ImgContainer, Img } from '../elements/StatusIMG'
import ContainerHome from '../elements/ContainerHome'

const valor = 35

function PieceItem () {
  return (
    <Container>
      <ContainerHome>
        <ContainerTitle>
          <Title>Pieza Afectada:</Title>
        </ContainerTitle>
        <TitleSecondary margin> Nombre de la pieza </TitleSecondary>
        <ImgContainer marginBottom>
          <Img src={imageB} />
        </ImgContainer>
        <Title>¿Desea cambiar esta pieza?</Title>
        <TitleSecondary margin> Valor: ${valor} </TitleSecondary>
        <Button margin>Si</Button>
        <Button margin>No por ahora</Button>
        <LinkElement to='/'>Contacta un asesor</LinkElement>
      </ContainerHome>
    </Container>
  )
}

export default PieceItem
