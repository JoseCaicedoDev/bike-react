import styled from 'styled-components'

const ContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  width:100%;
  height:100vh;
  max-width: 380px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: calc(100vh - 450px);
  display: none;
  place-items: center;
  justify-content: center;
  height: 100vh;
  transition: all 1s;
  @media (max-width:38rem){
    left: 0;
    top: 0;
  }
  `
const ContainerModalContent = styled.div`
  width: 28.2rem;
  border-radius:1rem;
  padding: 3rem;
  background-color: #F2F2F2;
`
const TextModal = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 2.9rem;
  text-align: center;
`
const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`
export { ContainerModal, ContainerModalContent, TextModal, ContainerButton }
