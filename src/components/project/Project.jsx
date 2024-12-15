

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';



Project.propTypes = {
  data: PropTypes.array,
};

function Project(props) {
  const { data } = props;

  const [dataBlock] = useState({
    subheading: 'GUESTS',
    heading: 'Our Honorable Guests',
  });

  useEffect(() => {
    const swiperAutoScroll = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 2000);

    return () => {
      clearInterval(swiperAutoScroll);
    };
  }, []);

  const swiperRef = React.useRef(null);

  return (
    <section className="project">
      <div className="shape right"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              <h6 className="sub-heading">
                <span>{dataBlock.subheading}</span>
              </h6>
              <h3 className="heading">{dataBlock.heading}</h3>
            </div>
            <div className="swiper-container project-swiper-container">
              <Swiper
                ref={swiperRef}
                className="project-swiper"
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
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                slidesPerGroup={1}
                {...gestureParams} 
              >
                {data.map((idx) => (
                  <SwiperSlide key={idx.id}>
                    <div className="swiper-slide">
                      <div className="project-box">
                        <div className="image">
                          <a href={idx.url} target="_blank" rel="noopener noreferrer">
                            <img src={idx.img} alt="Cyfonii" />
                          </a>
                        </div>
                        <div className="content">
                          <a href={idx.url} target="_blank" rel="noopener noreferrer" className="h5 title">
                            {idx.title}
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;


const gestureParams = {
  touchEventsTarget: 'wrapper', 
  touchStartPreventDefault: false, 
  touchMoveStopPropagation: false, 
  simulateTouch: true, 
  longSwipes: true,
  longSwipesRatio: 0.5, 
  longSwipesMs: 300, 
};
