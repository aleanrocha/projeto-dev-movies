import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/dev-movies-logo.png'
import {
  Header as HeaderContainer,
  AlignContent,
  Img,
  NavBarContainer,
  NavBar,
  ShowMenu,
  CloseMenu
} from './styles'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [changeBackground, setChangeBackground] = useState(false)

  const handleToggleMenu = () => setOpen(!open)

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
            <NavLink
              to={'/projeto-dev-movies'}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              onClick={() => setOpen(false)}
            >
              Início
            </NavLink>
            <NavLink
              to={'/projeto-dev-movies/filmes'}
              onClick={() => setOpen(false)}
            >
              Filmes
            </NavLink>
            <NavLink
              to={'/projeto-dev-movies/series'}
              onClick={() => setOpen(false)}
            >
              Séries
            </NavLink>
          </NavBar>
        </NavBarContainer>
      </AlignContent>
    </HeaderContainer>
  )
}

export default Header
