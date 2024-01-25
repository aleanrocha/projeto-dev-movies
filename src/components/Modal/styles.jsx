import styled from 'styled-components'

export const Background = styled.div`
  background-color: rgb(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;

  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0.6rem);
`
export const ModalContainer = styled.div`
  width: 95%;
  height: 70%;
  max-width: 70%;
  background-color: #000;
  position: relative;

  > iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  > svg {
    position: absolute;
    top: -30px;
    right: -60px;
    background-color: #ff3737;
    color: #fafafa;
    padding: 0.6rem;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: #ff0000;
    }
  }
`
