import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import logo from '../../assets/dev-movies-logo.png'
import {
  Header as HeaderContainer,
  AlignContent,
  Img,
  NavBarContainer,
  NavBar,
  LinkStyled,
  ShowMenu,
  CloseMenu
} from './styles'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [changeBackground, setChangeBackground] = useState(false)

  const handleToggleMenu = () => setOpen(!open)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBackground && window.scrollY > 96) {
      setChangeBackground(true)
    }
    if (changeBackground && window.scrollY <= 96) {
      setChangeBackground(false)
    }
  }

  return (
    <HeaderContainer $changeBackground={changeBackground}>
      <AlignContent>
        <Img src={logo} alt="logo dev movies" />
        <NavBarContainer $isMobile={open}>
          <ShowMenu $isMobile={open} onClick={handleToggleMenu} />
          <CloseMenu $isMobile={open} onClick={handleToggleMenu} />
          <NavBar $isMobile={open}>
            <LinkStyled
              to={'/projeto-dev-movies/'}
              $isActive={pathname === '/projeto-dev-movies/'}
              onClick={() => setOpen(false)}
            >
              Início
            </LinkStyled>
            <LinkStyled
              to={'/projeto-dev-movies/filmes'}
              $isActive={pathname === '/projeto-dev-movies/filmes'}
              onClick={() => setOpen(false)}
            >
              Filmes
            </LinkStyled>
            <LinkStyled
              to={'/projeto-dev-movies/series'}
              $isActive={pathname === '/projeto-dev-movies/series'}
              onClick={() => setOpen(false)}
            >
              Séries
            </LinkStyled>
          </NavBar>
        </NavBarContainer>
      </AlignContent>
    </HeaderContainer>
  )
}

export default Header
