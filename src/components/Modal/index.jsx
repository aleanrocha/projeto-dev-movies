import { useState, useEffect } from 'react'
import { FaX } from 'react-icons/fa6'

import api from '../../services/api'
import { Background, ModalContainer } from './styles'

const Modal = ({ movieId, setShowModal }) => {
  const [popularMovies, setPopularMovies] = useState()

  useEffect(() => {
    const handleGetPopularMovies = async () => {
      const {
        data: { results }
      } = await api.get(`movie/${movieId}/videos`)
      setPopularMovies(results)
    }
    handleGetPopularMovies()
  }, [])
  console.log(popularMovies)

  return (
    <Background>
      {popularMovies && (
        <ModalContainer>
          <FaX onClick={() => setShowModal(false)} />
          <iframe
            src={`https://www.youtube.com/embed/${popularMovies[0].key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </ModalContainer>
      )}
    </Background>
  )
}

export default Modal
