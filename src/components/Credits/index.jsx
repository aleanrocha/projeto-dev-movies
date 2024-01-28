import getImages from '../../utils/getImages'
import { Credit, CreditContainer, Title } from './styles'
const Credits = ({ credits }) => {
  console.log(credits)
  return (
    <CreditContainer>
      <Title>Créditos</Title>
      <Credit>
        {credits &&
          credits.splice(0, 5).map((artist) => (
            <div key={artist.id}>
              <img
                src={getImages(artist.profile_path)}
                alt={`imagem ${artist.name}`}
              />
              <h4>{artist.name}</h4>
            </div>
          ))}
      </Credit>
    </CreditContainer>
  )
}

export default Credits
