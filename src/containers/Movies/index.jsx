import { useEffect, useState } from 'react'

import Background from '../../components/Background'
import Loader from '../../components/Loader'
import Slider from '../../components/Slider'
import { getUpcomingMovie } from '../../services/getData'

const Movies = () => {
  const [upcomingMovie, setUpcomingMovie] = useState()

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
          <Background media={upcomingMovie[0]} type={'movies'} />
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
