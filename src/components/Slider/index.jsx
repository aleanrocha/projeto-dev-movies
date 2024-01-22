import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { SwipeContainer, Title } from './styles'

const Slider = ({ info, title }) => {
  return (
    <SwipeContainer>
      <Title>{title}</Title>
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        grabCursor
        className="swiper"
      >
        {info.map((info, index) => (
          <SwiperSlide key={index}>
            <Card imagePoster={info.poster_path} imageTitle={info.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwipeContainer>
  )
}

export default Slider
