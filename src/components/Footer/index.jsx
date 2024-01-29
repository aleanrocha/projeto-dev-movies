import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6'

import logo from '../../assets/dev-movies-logo.png'
import { FooterContainer, AlignContent, Wrapper, Image, Text } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <AlignContent>
        <Wrapper>
          <Image src={logo} alt="logo dev-movies" />
        </Wrapper>
        <Text>&copy; 2024 · Dev Movies. Todos os direitos reservados.</Text>
        <Wrapper>
          <FaInstagram />
          <FaFacebook />
          <FaLinkedin />
        </Wrapper>
      </AlignContent>
    </FooterContainer>
  )
}

export default Footer
