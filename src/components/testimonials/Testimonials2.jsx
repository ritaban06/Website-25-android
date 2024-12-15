import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

Testimonials2.propTypes = {
    data : PropTypes.array
};

function Testimonials2(props) {
    const {data} = props
    return (
        <section className="testimonials s2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="testimonials__main">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Testimonials</span></h6>
                                <h3 className="heading">What People Say <br />
                                    about us
                                    </h3>
                            </div>

                            <Swiper
               
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
                            className="testimonials-swiper s2"
                            loop= {true}
                            pagination
                        >
                        {
                            data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="box-testimonial center">
                                            <div className="image">
                                                <img src={idx.avt} alt="Cyfonii" />
                                            </div>
                                            
                                            <div className="info">
                                                <h5 className="name">{idx.name}</h5>
                                                <p>{idx.position}</p>
                                                <img src={idx.icon} alt="Cyfonii" />
                                            </div>
                                            <p className="text">{idx.text}</p>
                                        </div>
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>



                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials2;