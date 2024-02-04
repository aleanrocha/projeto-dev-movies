import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.8rem;
  transition: 0.2s;
  &:hover > h3 {
    color: #d7a33d;
  }
  &:hover > img {
    box-shadow: 0 0 20px #d7a33d;
  }
`

export const Image = styled.img`
  max-width: 260px;
  border-radius: 1rem;
  transition: 0.3s;
  @media screen and (max-width: 387px) {
    ${(props) =>
      props.$isPerson &&
      `
      max-width: 85%;
      margin: auto;
    `}
  }
`

export const ImageTitle = styled.h3`
  font-size: 1rem;
`
