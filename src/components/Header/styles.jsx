import styled from 'styled-components'

export const Header = styled.header`
  margin: auto;
  background-color: transparent;
  height: 96px;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  box-shadow: 0px 0px 5px #d7a33d;
  z-index: 3;
`
export const AlignContent = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
export const Img = styled.img`
  width: 200px;
`

export const NavBar = styled.nav`
  display: flex;
  gap: 2rem;
`

export const Link = styled.a`
  color: #fafafa;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.025rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #d7a33d;
  }
`
