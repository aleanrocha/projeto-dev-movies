import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Loader from '../../components/Loader'
import Slider from '../../components/Slider'
import SpanGeneres from '../../components/SpanGenres'
import {
  getPopularMovieById,
  getPopularMovieVideos,
  getPopularMovieSimilar,
  getPopularMovieCredits
} from '../../services/getData'
import getImages from '../../utils/getImages'
import {
  Background,
  Cover,
  Info,
  DetailContainer,
  VideoContainer
} from './styles'

const Detail = () => {
  const [popularMovie, setPopularMovie] = useState()
  const [popularMovieVideos, setPopularMovieVideos] = useState()
  const [popularMovieSimilar, setPopularMovieSimilar] = useState()
  const [popularMovieCredits, setPopularMovieCredits] = useState()
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([
        getPopularMovieById(id),
        getPopularMovieVideos(id),
        getPopularMovieSimilar(id),
        getPopularMovieCredits(id)
      ])
        .then(([movie, video, similar, credits]) => {
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
      {popularMovie ? (
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
              <Credits credits={popularMovieCredits} />
            </Info>
          </DetailContainer>
          <VideoContainer>
            <h2>Principais Trailers</h2>
            <div>
              {popularMovieVideos &&
                popularMovieVideos.map((video) => (
                  <div key={video.id}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title="YouTube video player"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
            </div>
          </VideoContainer>
          {popularMovieSimilar && (
            <Slider info={popularMovieSimilar} title={'Filmes similares'} />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Detail
