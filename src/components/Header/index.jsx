import { useState } from 'react'

import logo from '../../assets/dev-movies-logo.png'
import {
  Header as HeaderContainer,
  AlignContent,
  Img,
  NavBarContainer,
  NavBar,
  Link,
  ShowMenu,
  CloseMenu
} from './styles'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleToggleMenu = () => setOpen(!open)

  console.log(open)
  return (
    <HeaderContainer>
      <AlignContent>
        <Img src={logo} alt="logo dev movies" />
        <NavBarContainer $isMobile={open}>
          <ShowMenu $isMobile={open} onClick={handleToggleMenu} />
          <CloseMenu $isMobile={open} onClick={handleToggleMenu} />
          <NavBar $isMobile={open}>
            <Link>Início</Link>
            <Link>Filmes</Link>
            <Link>Séries</Link>
          </NavBar>
        </NavBarContainer>
      </AlignContent>
    </HeaderContainer>
  )
}

export default Header
