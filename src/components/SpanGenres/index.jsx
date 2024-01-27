import { GenreContainer, Span } from './styles'
const SpanGeneres = ({ genres }) => {
  return (
    <GenreContainer>
      {genres.map((genre) => (
        <Span key={genre.id}>{genre.name}</Span>
      ))}
    </GenreContainer>
  )
}

export default SpanGeneres
