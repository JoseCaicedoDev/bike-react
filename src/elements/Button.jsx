import styled from 'styled-components'
import theme from '../themas'

const Button = styled.button`
  background-color: ${theme.backgroundBlue};
  padding: ${(props) => props.secundary ? '1.2rem 2.4rem' : '1.8rem 5rem'};
  border: 2px solid ${theme.backgroundBtn};
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: ${theme.transparencia};
  border-radius: 2.6rem
`
export default Button
