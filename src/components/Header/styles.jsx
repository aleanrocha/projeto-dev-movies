import { FaBars, FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Header = styled.header`
  margin: auto;
  height: 96px;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  background-color: ${(props) =>
    props.$changeBackground ? '#00000094' : 'transparent'};
  box-shadow: ${(props) =>
    props.$changeBackground ? '0px 0px 5px #d7a33d' : 'none'};
  z-index: 3;
  backdrop-filter: ${(props) =>
    props.$changeBackground ? 'blur(.3rem)' : '0'};
  transition: background-color 0.3s ease-in-out;
`
export const AlignContent = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
export const Img = styled.img`
  width: 150px;
  @media screen and (max-width: 480px) {
    width: 120px;
  }
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

export const LinkStyled = styled(Link)`
  color: ${(props) => (props.$isActive ? '#d7a33d' : '#fafafa')};
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.025rem;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    height: 3px;
    background-color: #d7a33d;
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translate(-50%);
    transition: width 0.3s ease-in-out;
  }
  &:hover {
    color: #d7a33d;
  }
  &:hover::after {
    width: 100%;
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
