import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1440px;
  padding: 3rem 1rem;
  margin-top: 8rem;
  text-align: center;
  background-color: #000000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    gap: 3rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  > svg {
    font-size: 1.7rem;
    cursor: pointer;
    transition: 0.3s;
  }
  > svg:hover {
    color: #d7a33d;
  }
`

export const Image = styled.img`
  width: 140px;
`

export const Text = styled.p`
  font-weight: 400;
  color: #b8b7b7;
  @media screen and (max-width: 580px) {
    order: 3;
  }
`
