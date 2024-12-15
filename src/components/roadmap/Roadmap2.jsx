import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


Roadmap2.propTypes = {
    data: PropTypes.array
};

function Roadmap2(props) {
    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'Road Map',
            heading: 'The Journey of NFT Portfolio',
            
        }
    )
    return (
        <section className="roadmap s2">
                    <div className="shape"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="block-text center">
                                    <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                    <h3 className="heading pdb">{dataBlock.heading}</h3>
                                </div>

                                <div className="roadmap__main s1">
                                <Swiper
               
                                    spaceBetween={30}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        500: {
                                            slidesPerView: 2,
                                            },
                                        768: {
                                            slidesPerView: 4,
                                        },
                                        991: {
                                            slidesPerView: 6,
                                        },
                                    }}
                                    className="roadmap-swiper"
                                    loop= {true}

                                    modules={[Autoplay, Pagination, Navigation]}
                                    
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                      }}
                                >
                                {
                                    data.map(idx => (
                                        <SwiperSlide key={idx.id}>
                                            <div className="roadmap-box">
                                                        <div className="time">{idx.time}</div>
                                                        <div className="content">
                                                            <h5 className="title">{idx.title}</h5>
                                                            <p className="text">{idx.desc}</p>
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

export default Roadmap2;