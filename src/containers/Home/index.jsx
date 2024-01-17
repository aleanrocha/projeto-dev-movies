import api from '../../services/api'
const Home = () => {
  const handleGetMovies = async () => {
    const response = await api.get('movie/popular')
    console.log(response.data.results)
  }
  handleGetMovies()
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default Home
