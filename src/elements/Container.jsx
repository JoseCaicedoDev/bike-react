import styled from 'styled-components'
import theme from '../themas'

const Container = styled.div`
  display:block;
  justify-content: center;
  width:100%;
  height:100vh;
  background:${theme.backgroundColor};
  max-width: 380px;
  margin: 0 auto;
  //position: relative;
`

export default Container
