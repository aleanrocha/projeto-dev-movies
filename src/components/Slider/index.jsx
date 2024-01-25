import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { SwipeContainer, Title } from './styles'

const Slider = ({ info, title, isPerson }) => {
  return (
    <SwipeContainer $isPerson={isPerson}>
      <Title>{title}</Title>
      <Swiper
        spaceBetween={isPerson ? 'none' : '20'}
        slidesPerView={isPerson ? 'none' : 'auto'}
        grabCursor
        className="swiper"
      >
        {info.map((info, index) => (
          <SwiperSlide key={index}>
            <Card
              imagePoster={info.poster_path || info.profile_path}
              imageTitle={info.title || info.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwipeContainer>
  )
}

export default Slider
