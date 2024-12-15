import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

Project7.propTypes = {
  data: PropTypes.array,
};

function Project7(props) {
  const { data } = props;
  const [dataBlock] = useState({
    subheading: 'Sponsor',
    heading: 'Our Honorable Sponsors for Safalya, 23',
  });

  const positionStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '5px 10px',
    borderRadius: '5px',
  };

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
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              slidesPerGroup={1}
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
                        <p style={positionStyle}>{idx.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project7;
