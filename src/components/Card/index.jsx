import getImages from '../../utils/getImages'
import { CardContainer, Image, ImageTitle } from './styles'

const Card = ({ imagePoster, imageTitle, isPerson }) => {
  return (
    <CardContainer>
      <Image
        src={getImages(imagePoster)}
        alt={`imagem ${imageTitle}`}
        $isPerson={isPerson}
      />
      <ImageTitle>{imageTitle}</ImageTitle>
    </CardContainer>
  )
}

export default Card
