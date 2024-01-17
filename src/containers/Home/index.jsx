import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import api from '../../services/api'
import { Background, AlignContent, Info, Poster } from './styles'

const Home = () => {
  const [movie, setMovie] = useState()

  useEffect(() => {
    const handleGetMovies = async () => {
      const {
        data: { results }
      } = await api.get('movie/popular')
      setMovie(results[0])
    }
    handleGetMovies()
  }, [])

  return (
    <>
      {movie && (
        <Background
          $image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        >
          <AlignContent>
            <Info>
              <h1>{movie.original_title}</h1>
              <p>{movie.overview}</p>
              <Button>Assistir agora</Button>
              <Button>Assistir o trailer</Button>
            </Info>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`imagem ${movie.original_title}`}
              />
            </Poster>
          </AlignContent>
        </Background>
      )}
    </>
  )
}

export default Home
