import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import SpanGeneres from '../../components/SpanGenres'
import {
  getPopularMovieById,
  getPopularMovieVideos,
  getPopularMovieSimilar,
  getPopularMovieCredits
} from '../../services/getData'
import getImages from '../../utils/getImages'
import { Background, Cover, Info, DetailContainer } from './styles'

const Detail = () => {
  const [popularMovie, setPopularMovie] = useState()
  const [popularMovieVideos, setPopularMovieVideos] = useState()
  const [popularMovieSimilar, setPopularMovieSimilar] = useState()
  const [popularMovieCredits, setPopularMovieCredits] = useState()
  const { id } = useParams()

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([
        getPopularMovieById(id),
        getPopularMovieVideos(id),
        getPopularMovieSimilar(id),
        getPopularMovieCredits(id)
      ])
        .then(([movie, video, similar, credits]) => {
          console.log({ movie, video, similar, credits })
          setPopularMovie(movie)
          setPopularMovieVideos(video)
          setPopularMovieSimilar(similar)
          setPopularMovieCredits(credits)
        })
        .catch((err) => console.error(err))
    }
    getAllData()
  }, [])

  return (
    <>
      {popularMovie && (
        <>
          <Background
            $image={getImages(popularMovie.backdrop_path)}
          ></Background>

          <DetailContainer>
            <Cover>
              <img
                src={getImages(popularMovie.poster_path)}
                alt={`imagem ${popularMovie.title} `}
              />
            </Cover>
            <Info>
              <h1>{popularMovie.title}</h1>
              <SpanGeneres genres={popularMovie.genres} />
              <p>{popularMovie.overview}</p>
              <div>Créditos</div>
            </Info>
          </DetailContainer>
        </>
      )}
    </>
  )
}

export default Detail
