import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080808;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 5px dotted #d7a33d;
    animation: ${rotate} 3s infinite;
  }
`

export default LoaderContainer
