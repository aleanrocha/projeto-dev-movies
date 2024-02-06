import { useEffect, useState } from 'react'

import Background from '../../components/Background'
import Loader from '../../components/Loader'
import Slider from '../../components/Slider'
import {
  getPopularMovies,
  getPopularPerson,
  getPopularSeries,
  getRatedMovies
} from '../../services/getData'

const Home = () => {
  const [popularMovies, setPopularMovies] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [ratedMovies, setRatedMovies] = useState()
  const [popularPerson, setPopularPerson] = useState()

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([
        getPopularMovies(),
        getPopularSeries(),
        getRatedMovies(),
        getPopularPerson()
      ])
        .then(([popularMovie, popularSeries, topMovies, popularPerson]) => {
          setPopularMovies(popularMovie)
          setPopularSeries(popularSeries)
          setRatedMovies(topMovies)
          setPopularPerson(popularPerson)
        })
        .catch((err) => console.error(err))
    }
    getAllData()
  }, [])

  return (
    <>
      {popularMovies ? (
        <>
          <Background media={popularMovies[1]} />
          <Slider info={popularMovies} title={'Filmes populares'} />
          <Slider info={popularSeries} title={'Séries populares'} />
          <Slider info={ratedMovies} title={'Top filmes'} />
          <Slider isPerson info={popularPerson} title={'Top atores'} />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Home
