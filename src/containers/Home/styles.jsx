import styled from 'styled-components'

export const Background = styled.section`
  background: url(${(props) => props.$image}) center / cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
  }
`
export const AlignContent = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  z-index: 2;
`
export const Info = styled.div`
  max-width: 680px;
  & > h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  & > p {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    & > h1 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    & > p {
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
  }
`
export const Poster = styled.div`
  max-width: 300px;
  & > img {
    width: 100%;
    border-radius: 1rem;
    transition: 0.3s;
  }
  & > img:hover {
    transform: scale(1.03);
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
