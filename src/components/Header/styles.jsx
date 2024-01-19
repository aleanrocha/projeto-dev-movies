import { FaBars, FaX } from 'react-icons/fa6'

import styled from 'styled-components'

export const Header = styled.header`
  margin: auto;
  background-color: transparent;
  height: 96px;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
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
  width: 150px;
`
export const NavBarContainer = styled.div`
  ${(props) =>
    props.$isMobile
      ? `
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    `
      : `left: -100%;`}
  & > svg {
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 5;
  }
`
export const NavBar = styled.nav`
  display: flex;
  gap: 2rem;
  ${(props) =>
    props.$isMobile &&
    `
    background-color: #000000d3;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    backdrop-filter: blur(1rem);`}
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.$isMobile ? 'flex' : 'none')};
  }
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
export const ShowMenu = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.$isMobile ? 'none' : 'block')};
  }
`
export const CloseMenu = styled(FaX)`
  display: ${(props) => (props.$isMobile ? 'block' : 'none')};
  position: absolute;
  top: 1rem;
  left: 1rem;
`
