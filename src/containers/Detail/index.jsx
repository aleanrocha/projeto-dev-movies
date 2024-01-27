import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getPopularMovieById,
  getPopularMovieVideos,
  getPopularMovieSimilar,
  getPopularMovieCredits
} from '../../services/getData'
import { DetailContainer } from './styles'

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
    <DetailContainer>
      <div>detalhe</div>
    </DetailContainer>
  )
}

export default Detail
