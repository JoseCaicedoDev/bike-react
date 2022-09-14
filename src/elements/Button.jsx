import styled from 'styled-components'
import theme from '../themas'

const Button = styled.button`
  background-color: ${theme.primaryColor};
  padding: ${(props) => props.secondary ? '1.2rem 2.4rem' : '1.8rem 5rem'};
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: ${theme.lightColor};
  border-radius: 7px;
  width: 320px;
  box-shadow: ${theme.boxShadow};
  border: none;
  display: block;
  margin: auto;
  margin-top: ${(props) => props.margin ? '3rem' : '0'}
`
export default Button
