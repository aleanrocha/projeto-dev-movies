import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import getImages from '../../utils/getImages'
import { BackgroundContainer, AlignContent, Info, Poster } from './styles'

const Background = ({ media, type }) => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  return (
    <BackgroundContainer $image={getImages(media.backdrop_path)}>
      {showModal && (
        <Modal setShowModal={setShowModal} mediaId={media.id} type={type} />
      )}
      <AlignContent>
        <Info>
          <h1>{media.title || media.name}</h1>
          <p>{media.overview}</p>
          <Button
            onClick={() =>
              navigate(
                type === 'series'
                  ? `/projeto-dev-movies/detalhe/serie/${media.id}/`
                  : `/projeto-dev-movies/detalhe/filme/${media.id}/`
              )
            }
          >
            Saiba mais
          </Button>
          <Button onClick={() => setShowModal(true)}>Assistir trailer</Button>
        </Info>
        <Poster>
          <img
            src={getImages(media.poster_path)}
            alt={`imagem ${media.original_title}`}
          />
        </Poster>
      </AlignContent>
    </BackgroundContainer>
  )
}

export default Background
