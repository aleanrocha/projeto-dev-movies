import styled from 'styled-components'

export const SwipeContainer = styled.section`
  max-width: 1440px;
  margin: auto;
  overflow: hidden;
  padding: 6rem 2rem 0;
  .swiper-wrapper {
    display: flex;
    ${(props) =>
      props.$isPerson &&
      `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-gap: 1.5rem;
      `}
  }
`

export const Title = styled.h2`
  color: #d7a33d;
  padding: 1.5rem 0;
  text-transform: uppercase;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`
