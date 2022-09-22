import styled from 'styled-components'
import theme from '../themas'
// import image from '../resources/images/Ellipse6.png'

const ImgContainer = styled.div`
  width: 28.2rem;
  height:28.2rem;
  object-position:center;
  border-radius: 50%;
  margin:auto;
  border: ${(props) => props.noBorder ? 'none' : `6px solid ${theme.secondaryColor}`};
  margin-bottom: ${(props) => props.marginBottom ? '5rem' : '0'}
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`

export { ImgContainer, Img }
