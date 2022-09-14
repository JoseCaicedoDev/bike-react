import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../themas'

const Input = styled.input`
  width: 32rem;
  border: 1px solid ${theme.primaryColor};
  background-color: ${theme.lightColor};
  outline: 0;
  color: ${theme.secondaryColor};
  font-size: 2rem;
  padding:0.5rem 2rem;
  border-radius: 7px;
  height: 5rem;
  `
const Label = styled.label`
  margin-bottom: 6rem;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: ${theme.secondaryColor};
  margin-top: 1.9rem
`
const Image = styled.img`
  margin-block-start: 1rem;
`
const LinkElement = styled(Link)`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  color: ${theme.secondaryColor};
  margin-top: 4.6rem
`
export { Input, Label, Image, LinkElement }
