import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { SwipeContainer, Title } from './styles'

const Slider = ({ movies, title }) => {
  return (
    <SwipeContainer>
      <Title>{title}</Title>
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        grabCursor
        className="swiper"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card imagePoster={movie.poster_path} imageTitle={movie.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwipeContainer>
  )
}

export default Slider
