import styled from 'styled-components'
import theme from '../themas'

const Button = styled.button`
  background-color: ${theme.primaryColor};
  padding: ${(props) => props.secundary ? '1.2rem 2.4rem' : '1.8rem 5rem'};
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: ${theme.fontPrimary};
  border-radius: 7px;
  width: 320px;
  box-shadow: ${theme.boxShadow};
  border: none;
`
export default Button
