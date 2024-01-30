import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import { getRatedSeries } from '../../services/getData'
import getImages from '../../utils/getImages'
import { Background, AlignContent, Info, Poster } from './styles'

const Series = () => {
  const [ratedSeries, setRatedSeries] = useState()
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const getRatedSeriesData = async () => {
      setRatedSeries(await getRatedSeries())
    }
    getRatedSeriesData()
  }, [])

  return (
    <>
      {ratedSeries ? (
        <>
          <Background $image={getImages(ratedSeries[0].backdrop_path)}>
            {showModal && (
              <Modal setShowModal={setShowModal} serieId={ratedSeries[0].id} />
            )}
            <AlignContent>
              <Info>
                <h1>{ratedSeries[0].name}</h1>
                <p>{ratedSeries[0].overview}</p>
                <Button
                  onClick={() =>
                    navigate(`/detalhe/serie/${ratedSeries[0].id}/`)
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
                  src={getImages(ratedSeries[0].poster_path)}
                  alt={`imagem ${ratedSeries[0].original_title}`}
                />
              </Poster>
            </AlignContent>
          </Background>
          <Slider isPerson info={ratedSeries} title={'Séries populares'} />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Series
