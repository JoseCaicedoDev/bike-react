import styled from 'styled-components'
import image from '../resources/images/Ellipse6.png'
import theme from '../themas'

const ImgContainer = styled.div`
  width: 28.2rem;
  height:28.2rem;
  object-position:center;
  border-radius: 50%;
  margin:auto;
  background-image: url(${image});
`

const StatusCar = styled.div`
  width: 100vw;

  p {
    font-family: 'Roboto';
    color: ${theme.fontPrimary}
  }
`

export { ImgContainer, StatusCar }
