import styled from 'styled-components'
import theme from '../themas'

const TitleState = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.4rem;
  text-align: center;
  margin: 9rem 0;
  color: ${theme.secondaryColor};

  a {
    font-size: 2rem;
    color: ${theme.secondaryColor};
  }
`
/* const linkState = styled.a`
` */
export { TitleState }
