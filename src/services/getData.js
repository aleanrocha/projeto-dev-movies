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

export const getUpcomingMovie = async () => {
  const {
    data: { results }
  } = await api.get(`movie/upcoming`)
  return results
}

export const getMovieById = async (movieId) => {
  const { data } = await api.get(`movie/${movieId}`)
  return data
}

export const getMovieVideos = async (movieId) => {
  const {
    data: { results }
  } = await api.get(`movie/${movieId}/videos`)
  return results
}

export const getMovieCredits = async (movieId) => {
  const {
    data: { cast }
  } = await api.get(`movie/${movieId}/credits`)
  return cast
}

export const getMovieSimilar = async (movieId) => {
  const {
    data: { results }
  } = await api.get(`movie/${movieId}/similar`)
  return results
}

export const getSerieById = async (serieId) => {
  const { data } = await api.get(`tv/${serieId}`)
  return data
}

export const getSerieVideos = async (serieId) => {
  const {
    data: { results }
  } = await api.get(`tv/${serieId}/videos`)
  return results
}

export const getSerieCredits = async (serieId) => {
  const {
    data: { cast }
  } = await api.get(`tv/${serieId}/credits`)
  return cast
}

export const getSerieSimilar = async (serieId) => {
  const {
    data: { results }
  } = await api.get(`tv/${serieId}/similar`)
  return results
}
