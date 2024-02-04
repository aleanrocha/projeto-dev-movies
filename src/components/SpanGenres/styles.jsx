import styled from 'styled-components'

export const GenreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  @media screen and (max-width: 580px) {
    justify-content: center;
  }
`
export const Span = styled.span`
  background-color: transparent;
  color: #fafafa;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.4rem 1rem;
  border: 2px solid #d7a33d;
  border-radius: 5rem;
  transition: 0.1s;
  &:hover {
    box-shadow: 0px 0px 5px #d7a33d;
  }
`
