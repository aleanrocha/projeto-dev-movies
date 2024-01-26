import { useState, useEffect } from 'react'
import { FaX } from 'react-icons/fa6'

import { getPopularMovieVideo } from '../../services/getData'
import { Background, ModalContainer } from './styles'

const Modal = ({ movieId, setShowModal }) => {
  const [popularMovieVideo, setPopularMovieVideo] = useState()

  useEffect(() => {
    const getPopularVideo = async () => {
      setPopularMovieVideo(await getPopularMovieVideo(movieId))
    }
    getPopularVideo()
  }, [])

  return (
    <Background>
      {popularMovieVideo && (
        <ModalContainer>
          <FaX onClick={() => setShowModal(false)} />
          <iframe
            src={`https://www.youtube.com/embed/${popularMovieVideo.key}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </ModalContainer>
      )}
    </Background>
  )
}

export default Modal
