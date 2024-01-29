import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6'

import logo from '../../assets/dev-movies-logo.png'
import { FooterContainer, Wrapper, Image, Text } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Image src={logo} alt="logo dev-movies" />
      </Wrapper>
      <Text>&copy; 2024 · Dev Movies. Todos os direitos reservados.</Text>
      <Wrapper>
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer
