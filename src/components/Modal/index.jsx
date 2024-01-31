import { useState, useEffect } from 'react'
import { FaX } from 'react-icons/fa6'

import { getMovieVideos, getSerieVideos } from '../../services/getData'
import { Background, ModalContainer } from './styles'

const Modal = ({ mediaId, type, setShowModal }) => {
  const [movieVideo, setMovieVideo] = useState()
  const [serieVideo, setSerieVideo] = useState()

  useEffect(() => {
    const getVideos = async () => {
      type === 'series'
        ? setSerieVideo(await getSerieVideos(mediaId))
        : setMovieVideo(await getMovieVideos(mediaId))
    }
    getVideos()
  }, [type, mediaId])

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
