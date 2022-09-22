import styled from 'styled-components'
import theme from '../themas'

const Title = styled.h3`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.42rem;
  text-align: center;
  color: ${theme.secondaryColor}
`

const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  padding-top: 5.4rem;
`
const TitleSecondary = styled.h3`
  font-weight: 700;
  font-size: 2rem;
  color: ${theme.secondaryColor};
  margin-block: ${(props) => props.margin ? '2rem' : '0'};
`

export { Title, ContainerTitle, TitleSecondary }
