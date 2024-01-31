import { useEffect, useState } from 'react'

import Background from '../../components/Background'
import Loader from '../../components/Loader'
import Slider from '../../components/Slider'
import { getRatedSeries } from '../../services/getData'

const Series = () => {
  const [ratedSeries, setRatedSeries] = useState()

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
          <Background media={ratedSeries[0]} />
          <Slider isPerson info={ratedSeries} title={'Séries populares'} />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Series
