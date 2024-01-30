import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import { getUpcomingMovie } from '../../services/getData'
import getImages from '../../utils/getImages'
import { Background, AlignContent, Info, Poster } from './styles'

const Movies = () => {
  const [upcomingMovie, setUpcomingMovie] = useState()
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const getUpcomingMovieData = async () => {
      setUpcomingMovie(await getUpcomingMovie())
    }
    getUpcomingMovieData()
  }, [])

  return (
    <>
      {upcomingMovie ? (
        <>
          <Background $image={getImages(upcomingMovie[0].backdrop_path)}>
            {showModal && (
              <Modal
                setShowModal={setShowModal}
                movieId={upcomingMovie[0].id}
              />
            )}
            <AlignContent>
              <Info>
                <h1>{upcomingMovie[0].title}</h1>
                <p>{upcomingMovie[0].overview}</p>
                <Button
                  onClick={() =>
                    navigate(`/detalhe/filme/${upcomingMovie[0].id}/`)
                  }
                >
                  Assistir agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assistir o trailer
                </Button>
              </Info>
              <Poster>
                <img
                  src={getImages(upcomingMovie[0].poster_path)}
                  alt={`imagem ${upcomingMovie[0].original_title}`}
                />
              </Poster>
            </AlignContent>
          </Background>
          <Slider
            isPerson
            info={upcomingMovie}
            title={'Filmes recém lançados'}
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Movies
