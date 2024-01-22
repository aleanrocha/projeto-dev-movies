import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
import api from '../../services/api'
import getImages from '../../utils/getImages'
import { Background, AlignContent, Info, Poster } from './styles'

const Home = () => {
  const [popularMovies, setPopularMovies] = useState()
  const [popularSeries, setPopularSeries] = useState()

  useEffect(() => {
    const handleGetPopularMovies = async () => {
      const {
        data: { results }
      } = await api.get('movie/popular')
      setPopularMovies(results)
    }
    handleGetPopularMovies()

    const handleGetPopularSeries = async () => {
      const {
        data: { results }
      } = await api.get('tv/popular')
      setPopularSeries(results)
    }
    handleGetPopularSeries()
  }, [])

  return (
    <>
      {popularMovies && (
        <Background $image={getImages(popularMovies[0].backdrop_path)}>
          <AlignContent>
            <Info>
              <h1>{popularMovies[0].original_title}</h1>
              <p>{popularMovies[0].overview}</p>
              <Button>Assistir agora</Button>
              <Button>Assistir o trailer</Button>
            </Info>
            <Poster>
              <img
                src={getImages(popularMovies[0].poster_path)}
                alt={`imagem ${popularMovies[0].original_title}`}
              />
            </Poster>
          </AlignContent>
        </Background>
      )}
      {popularMovies && (
        <Slider info={popularMovies} title={'Filmes populares'} />
      )}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries populares'} />
      )}
    </>
  )
}

export default Home
