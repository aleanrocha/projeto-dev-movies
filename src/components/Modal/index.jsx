import { useState, useEffect } from 'react'
import { FaX } from 'react-icons/fa6'

import { getMovieVideos, getSerieVideos } from '../../services/getData'
import { Background, ModalContainer } from './styles'

const Modal = ({ movieId, serieId, setShowModal }) => {
  const [movieVideo, setMovieVideo] = useState()
  const [serieVideo, setSerieVideo] = useState()

  useEffect(() => {
    const getVideos = async () => {
      if (movieId) setMovieVideo(await getMovieVideos(movieId))
      if (serieId) setSerieVideo(await getSerieVideos(serieId))
    }
    getVideos()
  }, [movieId, serieId])

  return (
    <Background>
      {(movieVideo || serieVideo) && (
        <ModalContainer>
          <FaX onClick={() => setShowModal(false)} />
          <iframe
            src={`https://www.youtube.com/embed/${(movieVideo && movieVideo[0].key) || (serieVideo && serieVideo[0].key)}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </ModalContainer>
      )}
    </Background>
  )
}

export default Modal
