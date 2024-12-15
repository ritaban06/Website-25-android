import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Pagination   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

Testimonials.propTypes = {
    data: PropTypes.array
};

function Testimonials(props) {
    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'OUR MOTTO',
            heading: 'OUR MOTTO',
        }
    )

    return (
        <section className="testimonials">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonials__main">
                                <div className="block-text center">
                                    <h6 className="sub-heading"><span>{dataBlock.heading}</span></h6>
                                    <h3 className="heading wow" data-splitting>{dataBlock.heading}
                                        </h3>
                                </div>

                                <Swiper
               
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    className="testimonials-swiper"
                                    loop= {false}
                                    
                                    modules={Pagination}
                                    pagination
                                >
                        {
                            data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="swiper-slide">
                                            <div className="box-testimonial center">
                                                <img src={idx.icon} alt="Cyfonii" />
                                                <p className="text">{idx.text}</p>
                                                <div className="info">
                                                    <h5 className="name">{idx.name}</h5>
                                                    <p>{idx.position}</p>
                                                </div>
                                            </div>
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

export default Testimonials;
