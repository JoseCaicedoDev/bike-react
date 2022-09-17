import styled from 'styled-components'
import theme from '../themas'

const Button = styled.button`
  background-color: ${theme.primaryColor};
  padding: ${(props) => props.secondary ? '1.2rem 0rem' : '1.8rem 5rem'};
  font-weight: 600;
  font-size: ${props => props.size} ;
  line-height: 2.9rem;
  color: ${theme.lightColor};
  border-radius: 7px;
  width: ${props => props.width};
  box-shadow: ${theme.boxShadow};
  border: none;
  display: block;
  margin: ${props => props.margin};
  margin-top: ${(props) => props.margin ? '3rem' : '0'}
`
export default Button
