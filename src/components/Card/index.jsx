import getImages from '../../utils/getImages'
import { CardContainer, Image, ImageTitle } from './styles'

const Card = ({ imagePoster, imageTitle }) => {
  return (
    <CardContainer>
      <Image src={getImages(imagePoster)} alt={`imagem ${imageTitle}`} />
      <ImageTitle>{imageTitle}</ImageTitle>
    </CardContainer>
  )
}

export default Card
