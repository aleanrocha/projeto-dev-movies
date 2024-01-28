import styled from 'styled-components'

export const CreditContainer = styled.div`
  width: 100%;
`
export const Title = styled.h3`
  margin-bottom: 1.5rem;
`
export const Credit = styled.div`
  width: 100%;
  display: flex;
  gap: 0.6rem;
  > div {
    width: 120px;
    text-align: center;
    > img {
      width: 100%;
      border-radius: 1rem;
    }
    > h4 {
      font-size: 0.8rem;
      margin-top: 0.3rem;
    }
  }
`
