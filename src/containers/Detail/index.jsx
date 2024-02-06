import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Loader from '../../components/Loader'
import Slider from '../../components/Slider'
import SpanGeneres from '../../components/SpanGenres'
import {
  getMovieById,
  getMovieVideos,
  getMovieSimilar,
  getMovieCredits,
  getSerieById,
  getSerieVideos,
  getSerieSimilar,
  getSerieCredits
} from '../../services/getData'
import getImages from '../../utils/getImages'
import {
  Background,
  Cover,
  Info,
  DetailContainer,
  VideoContainer
} from './styles'

const Detail = () => {
  const [media, setMedia] = useState()
  const [mediaVideos, setMediaVideos] = useState()
  const [mediaSimilar, setMediaSimilar] = useState()
  const [mediaCredits, setMediaCredits] = useState()
  const { type, id } = useParams()

  useEffect(() => {
    const getAllData = async () => {
      try {
        const [mediaDetails, videos, similar, credits] = await Promise.all([
          type === 'filme' ? getMovieById(id) : getSerieById(id),
          type === 'filme' ? getMovieVideos(id) : getSerieVideos(id),
          type === 'filme' ? getMovieSimilar(id) : getSerieSimilar(id),
          type === 'filme' ? getMovieCredits(id) : getSerieCredits(id)
        ])
        setMedia(mediaDetails)
        setMediaVideos(videos)
        setMediaSimilar(similar)
        setMediaCredits(credits)
      } catch (error) {
        console.log(error)
      }
    }
    getAllData()
  }, [type, id])

  return (
    <>
      {media ? (
        <>
          <Background $image={getImages(media.backdrop_path)}></Background>
          <DetailContainer>
            <Cover>
              <img
                src={getImages(media.poster_path)}
                alt={`imagem ${media.title} `}
              />
            </Cover>
            <Info>
              <h1>{media.title || media.name}</h1>
              <SpanGeneres genres={media.genres} />
              <p>{media.overview}</p>
              <Credits credits={mediaCredits} />
            </Info>
          </DetailContainer>
          <VideoContainer $isSingleTrailer={mediaVideos.length === 1}>
            <h2>Principais Trailers</h2>
            <div>
              {mediaVideos &&
                mediaVideos.map((video) => (
                  <div key={video.id}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title="YouTube video player"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
            </div>
          </VideoContainer>
          {mediaSimilar && (
            <Slider info={mediaSimilar} title={'Filmes similares'} />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Detail
