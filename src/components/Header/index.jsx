import logo from '../../assets/dev-movies-logo.png'
import {
  Header as HeaderContainer,
  AlignContent,
  Img,
  NavBar,
  Link
} from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <AlignContent>
        <Img src={logo} alt="logo dev movies" />
        <NavBar>
          <Link>Início</Link>
          <Link>Filmes</Link>
          <Link>Séries</Link>
        </NavBar>
      </AlignContent>
    </HeaderContainer>
  )
}

export default Header
