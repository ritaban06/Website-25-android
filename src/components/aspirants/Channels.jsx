//React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//Swiper API
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Navigation,Pagination} from 'swiper'
import 'swiper/scss';
import 'swiper/scss/pagination';
//FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

Channels.propTypes = {
  data: PropTypes.array,
};

function Channels(props) {
  const { data } = props;

  // useEffect(() => {
  //   const swiperAutoScroll = setInterval(() => {
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //       swiperRef.current.swiper.slideNext();
  //     }
  //   }, 5000);

  //   return () => {
  //     clearInterval(swiperAutoScroll);
  //   };
  // }, []);

  const swiperRef = React.useRef(null);

function control_prev() {
  if (swiperRef.current && swiperRef.current.swiper) {
    swiperRef.current.swiper.slidePrev();
  }
}
function control_next() {
  if (swiperRef.current && swiperRef.current.swiper) {
    swiperRef.current.swiper.slideNext();
  }
}

  return (
    <div className="channel-carousel">
      <div className='control' style={{margin:"0 25px 0 0",}}
      onClick={control_prev}
      ><FontAwesomeIcon className='arrow-icons' size='xl' icon={faAngleLeft} /></div>
      <section className="channel-section">
        {/* <div className="shape right"></div> */}
        <div className="container" id='ch-cont'>
          <div className="row">
            <div className="col-12">
              <div className="swiper-container project-swiper-container">
                <Swiper
                  ref={swiperRef}
                  className="project-swiper channel-swiper"
                  spaceBetween={30}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    991: {
                      slidesPerView: 3,
                    },
                  }}
                  loop={true}
                  navigation={false}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  slidesPerGroup={1}
                  modules={[Navigation,Pagination,Autoplay]}
                  {...gestureParams}
                >
                  {data.map((idx) => (
                    <SwiperSlide key={idx.id}>
                      <div className="swiper-slide">
                          <a href={idx.url} target="_blank" rel="noopener noreferrer">
                            <div className="channel-container">
                              <img className="channel-box"  src={idx.img} alt="Channel Picture" />
                              <div className="channel-name">
                              {idx.title}
                              </div>
                            </div>
                          </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='control' style={{margin:"0 0 0 25px",}} onClick={control_next}><FontAwesomeIcon className='arrow-icons' size='xl' icon={faAngleRight} /></div>
    </div>
  );
}

export default Channels;


const gestureParams = {
  touchEventsTarget: 'wrapper', 
  touchStartPreventDefault: false, 
  touchMoveStopPropagation: false, 
  simulateTouch: true, 
  longSwipes: true,
  longSwipesRatio: 0.5, 
  longSwipesMs: 300, 
};
