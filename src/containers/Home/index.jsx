import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getPopularMovies,
  getPopularPerson,
  getPopularSeries,
  getRatedMovies,
  getRatedSeries
} from '../../services/getData'
import getImages from '../../utils/getImages'
import { Background, AlignContent, Info, Poster } from './styles'

const Home = () => {
  const [popularMovies, setPopularMovies] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [ratedMovies, setRatedMovies] = useState()
  const [ratedSeries, setRatedSeries] = useState()
  const [popularPerson, setPopularPerson] = useState()
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const getAllData = async () => {
      setPopularMovies(await getPopularMovies())
      setPopularSeries(await getPopularSeries())
      setRatedMovies(await getRatedMovies())
      setRatedSeries(await getRatedSeries())
      setPopularPerson(await getPopularPerson())
    }
    getAllData()
  }, [])

  return (
    <>
      {popularMovies && (
        <Background $image={getImages(popularMovies[0].backdrop_path)}>
          {showModal && (
            <Modal setShowModal={setShowModal} movieId={popularMovies[0].id} />
          )}
          <AlignContent>
            <Info>
              <h1>{popularMovies[0].original_title}</h1>
              <p>{popularMovies[0].overview}</p>
              <Button
                onClick={() => navigate(`detalhe/${popularMovies[0].id}/`)}
              >
                Assistir agora
              </Button>
              <Button onClick={() => setShowModal(true)}>
                Assistir o trailer
              </Button>
            </Info>
            <Poster>
              <img
                src={getImages(popularMovies[0].poster_path)}
                alt={`imagem ${popularMovies[0].original_title}`}
              />
            </Poster>
          </AlignContent>
        </Background>
      )}
      {popularMovies && (
        <Slider info={popularMovies} title={'Filmes populares'} />
      )}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries populares'} />
      )}
      {ratedMovies && <Slider info={ratedMovies} title={'Top filmes'} />}
      {ratedSeries && <Slider info={ratedSeries} title={'Top séries'} />}
      {popularPerson && (
        <Slider isPerson info={popularPerson} title={'Top atores'} />
      )}
    </>
  )
}

export default Home
