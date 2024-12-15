import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import PropTypes from 'prop-types';
import 'swiper/scss/pagination';
import data from '../../assets/fake-data/dataPartner'

Partners.propTypes = {
  data: PropTypes.array,
};

function Partners(props) {
  return (
    <div className='wrapper'>

      {/* <PageTitle title='Partners & Investors' /> */}

      <section className="partner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block-text center">
                <h6 className="sub-heading">
                  <span>Sponsor</span>
                </h6>
                <h3 className="heading">
                  Our Honourable Sponsors for Safalya '23
                </h3>
              </div>

              <Swiper
                className="brands-swiper"
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1100: {
                    slidesPerView: 4,
                  },
                }}
                loop={true}

              >

                {
                  data.slice(0, 4).map(idx => (
                    <SwiperSlide key={idx.id}>
                      <a href="#null"><img src={idx.img} alt="cyfonii" /></a>
                    </SwiperSlide>
                  ))
                }


              </Swiper>
              <Swiper
                className="brands-swiper"
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1100: {
                    slidesPerView: 4,
                  },
                }}
                loop={true}

              >

                {
                  data.slice(4, 8).map(idx => (
                    <SwiperSlide key={idx.id}>
                      <a href="#null"><img src={idx.img} alt="cyfonii" /></a>
                    </SwiperSlide>
                  ))
                }

              </Swiper>
              <Swiper
                className="brands-swiper"
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1100: {
                    slidesPerView: 4,
                  },
                }}
                loop={true}

              >

                {
                  data.slice(8, 12).map(idx => (
                    <SwiperSlide key={idx.id}>
                      <a href="#null"><img src={idx.img} alt="cyfonii" /></a>
                    </SwiperSlide>
                  ))
                }

              </Swiper>
              <Swiper
                className="brands-swipers"
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1100: {
                    slidesPerView: 4,
                  },
                }}
                loop={true}

              >

                {
                  data.slice(12, 16).map(idx => (
                    <SwiperSlide key={idx.id}>
                      <a href="#null"><img src={idx.img} alt="cyfonii" /></a>
                    </SwiperSlide>
                  ))
                }

              </Swiper>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Partners;