import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

export const Background = styled.section`
  background: url(${(props) => props.$image}) center top / cover;
  height: 45vh;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #131010, transparent);
  }
`
export const DetailContainer = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
  max-width: 1440px;
  padding: 2rem;
  margin-top: -90px;
`
export const Cover = styled.div`
  width: 100%;
  max-width: 300px;
  animation: ${scale} 0.5s linear;
  > img {
    width: 100%;
    border-radius: 1rem;
  }
`

export const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > h1 {
    font-size: 2.5rem;
  }

  > p {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`
