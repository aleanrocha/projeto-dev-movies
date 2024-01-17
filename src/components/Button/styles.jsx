import styled from 'styled-components'

export const Btn = styled.button`
  background-color: transparent;
  color: #fafafa;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.8rem 2rem;
  border: 2px solid #d7a33d;
  border-radius: 5rem;
  margin: 2rem 1rem 0 0;
  min-width: 140px;
  backdrop-filter: blur(5rem);
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    box-shadow: 0px 0px 5px #d7a33d;
  }
`
