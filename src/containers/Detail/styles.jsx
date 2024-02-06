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
  height: 50vh;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
  max-width: 1440px;
  padding: 2rem;
  margin: -90px auto 0;
  @media screen and (max-width: 580px) {
    margin: -72px auto 0;
  }
`
export const Cover = styled.div`
  width: 100%;
  max-width: 360px;
  animation: ${scale} 0.5s linear;
  > img {
    width: 100%;
    border-radius: 1rem;
  }
  @media screen and (max-width: 992px) {
    display: none;
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
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 580px) {
    > h1 {
      font-size: 2rem;
      text-align: center;
    }
    > p {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`
export const VideoContainer = styled.section`
  width: 95%;
  max-width: 1440px;
  margin: 3rem auto 0;

  > h2 {
    color: #d7a33d;
    text-align: center;
    margin: 1.5rem 0;
    text-transform: uppercase;
  }

  > div {
    ${(props) => console.log(props)}

    background-color: #1f1e1e;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: ${(props) =>
      props.$isSingleTrailer ? 'repeat(1, 85%)' : 'repeat(2, 1fr)'};
    gap: 1rem;
    padding: 2rem;
    justify-content: center;

    > div {
      background-color: #000;
      width: 100%;
      height: ${(props) => (props.$isSingleTrailer ? '480px' : '300px')};

      > iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem;

      > div {
        height: 300px;
      }
    }
  }
`
