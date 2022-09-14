import { ImgPiece, PhotoContainer } from '../elements/PhotoMarket'

function PieceShop ({ pieza }) {
  return (
    <PhotoContainer>
      <ImgPiece src={pieza.img.img} alt={pieza.img.id} />
    </PhotoContainer>
  )
}

export default PieceShop
