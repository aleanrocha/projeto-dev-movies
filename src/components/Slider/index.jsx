import { Swiper, SwiperSlide } from 'swiper/react'

import { SwipeContainer, Title } from './styles'

const Slider = ({ ratedMovies, title }) => {
  return (
    <SwipeContainer>
      <Title>{title}</Title>
      <Swiper
        spaceBetween={120}
        slidesPerView={'auto'}
        grabCursor
        className="swiper"
      >
        {ratedMovies.map((movie, index) => (
          <SwiperSlide key={index}>{movie.original_title}</SwiperSlide>
        ))}
      </Swiper>
    </SwipeContainer>
  )
}

export default Slider
