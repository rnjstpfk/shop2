import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const SectionTitle = () => {
  return (
    <div className='section01title'>
        <h2>아뜨랑스는</h2>
        <p>화면너머의 여러분에게 따뜻한 쇼핑메이트이고 싶습니다. <br />

            일상에 스며드는 실용적인 옷들부터<br />

            가장 빛이 나야하는 순간까지 언제나 함께 하겠습니다.
        </p>

       <div id="sectionTitleSwiper">
            <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/section01/sec01-1.jpg"} alt="sectionImg01" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/section01/sec01-2.jpg"} alt="sectionImg01" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/section01/sec01-3.jpg"} alt="sectionImg01" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/section01/sec01-4.jpg"} alt="sectionImg01" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/section01/sec01-5.jpg"} alt="sectionImg01" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/section01/sec01-6.jpg"} alt="sectionImg01" /></SwiperSlide>
    
            </Swiper>
            <div className="pagination">
                <div className="swipernext"></div>
                <div className="swiperprev"></div>
            </div>
       </div>
    </div>
  );
};

export default SectionTitle;
