import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Carousel = () => {

    const images = ["https://http2.mlstatic.com/D_NQ_NP_917086-MLA48196821690_112021-O.webp", "https://http2.mlstatic.com/D_NQ_NP_917086-MLA48196821690_112021-O.webp", "https://http2.mlstatic.com/D_NQ_NP_917086-MLA48196821690_112021-O.webp", "https://http2.mlstatic.com/D_NQ_NP_917086-MLA48196821690_112021-O.webp" ]
    return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {
        images.map(image => (
            <SwiperSlide>
                <img src={image} alt=""/>
            </SwiperSlide>
        ))
     }
    </Swiper>
  );
};