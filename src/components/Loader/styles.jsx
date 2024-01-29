import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
const LoaderContainer = styled.div`
  background-color: #080808;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;

  > span {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 5px dotted #d7a33d;
    animation: ${rotate} 3s infinite;
  }
`

export default LoaderContainer
