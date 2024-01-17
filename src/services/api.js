import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { language: 'pt-BR', page: '1' },
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDBlZDhlMTI4ZDRhNzc2MmExMDc0ZTQyZjQ5MDY4YSIsInN1YiI6IjY1YTcxMzFjZDE4ZmI5MDEyODUyYTY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhdjmdtFZcIEWp_zPqZTwamP2z4Hf1g53yIIHjAzpa4'
  }
})
export default api
