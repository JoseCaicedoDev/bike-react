import styled from 'styled-components'
import theme from '../../themas'

const Input = styled.input`
  width: 26.6rem;
  border: none;
  border-bottom: 2px solid ${theme.fontPrimary};
  background-color: ${theme.background};
  outline: 0;
  color: ${theme.fontPrimary};
  font-size: 2rem;
  padding:0.5rem 2rem;
  `
const Label = styled.label`
  margin-bottom: 6rem;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: ${theme.fontPrimary};
  margin-top: 1.9rem
`
const Image = styled.img`
  margin-block-start: 1rem;
`
const LinkUser = styled.a`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  color: ${theme.fontPrimary};
  margin-top: 4.6rem
`
export { Input, Label, Image, LinkUser }
