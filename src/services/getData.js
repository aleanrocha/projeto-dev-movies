import api from './api'

export const getPopularMovies = async () => {
  const {
    data: { results }
  } = await api.get('movie/popular')
  return results
}

export const getPopularSeries = async () => {
  const {
    data: { results }
  } = await api.get('tv/popular')
  return results
}

export const getRatedMovies = async () => {
  const {
    data: { results }
  } = await api.get('movie/top_rated')
  return results
}

export const getRatedSeries = async () => {
  const {
    data: { results }
  } = await api.get('tv/top_rated')
  return results
}

export const getPopularPerson = async () => {
  const {
    data: { results }
  } = await api.get('person/popular')
  return results
}

export const getPopularMovieVideo = async (movieId) => {
  const {
    data: { results }
  } = await api.get(`movie/${movieId}/videos`)
  return results[0]
}
