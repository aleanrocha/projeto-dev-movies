import { useState, useEffect } from 'react'
import { FaX } from 'react-icons/fa6'

import {
  getPopularMovieVideos,
  getPopularSerieVideos
} from '../../services/getData'
import { Background, ModalContainer } from './styles'

const Modal = ({ movieId, serieId, setShowModal }) => {
  const [popularMovieVideo, setPopularMovieVideo] = useState()
  const [popularSerieVideo, setPopularSerieVideo] = useState()

  useEffect(() => {
    const getPopularVideos = async () => {
      if (movieId) setPopularMovieVideo(await getPopularMovieVideos(movieId))
      if (serieId) setPopularSerieVideo(await getPopularSerieVideos(serieId))
    }
    getPopularVideos()
  }, [])

  return (
    <Background>
      {(popularMovieVideo || popularSerieVideo) && (
        <ModalContainer>
          <FaX onClick={() => setShowModal(false)} />
          <iframe
            src={`https://www.youtube.com/embed/${(popularMovieVideo && popularMovieVideo[0].key) || (popularSerieVideo && popularSerieVideo[0].key)}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </ModalContainer>
      )}
    </Background>
  )
}

export default Modal
