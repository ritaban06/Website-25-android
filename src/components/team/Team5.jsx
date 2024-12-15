import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

Team5.propTypes = {
    data: PropTypes.array
};

function Team5(props) {

    const { data } = props;

    const [dataBlock] = useState(
        {
            subheading: 'Development Team',
            heading: '',
        }
    )
    const [swiper, setSwiper] = useState(null);
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        if (swiper) {
            swiper.update();
        }
    }, [swiper]);

    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth <= 768) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(3);
            }
        };

        // Initial check and add event listener
        handleResize();
        window.addEventListener('resize', handleResize);

        const swiperAutoScroll = setInterval(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideNext();
            }
        }, 2000);

        return () => {
            clearInterval(swiperAutoScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkedInClick = (event, link) => {
        event.stopPropagation();
        window.open(link.link1, '_blank');
    };

    const handleGitHubClick = (event, link) => {
        event.stopPropagation();
        window.open(link.link2, '_blank');
    };
    return (
        <section className="team">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                            <h3 className="heading pd">{dataBlock.heading}</h3>
                        </div>

                        <Swiper
                            ref={swiperRef}
                            spaceBetween={20}
                            slidesPerView={slidesPerView}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            effect={'coverflow'}
                            grabCursor={true}
                            pagination={{ clickable: true }}
                            onSwiper={setSwiper}
                        >

                            {
                                data.map(idx => (
                                    <SwiperSlide key={idx.id}>
                                        <div className="swiper-slide">
                                            <div className="team-box">
                                                <div className="image">
                                                    <Link to="/team">
                                                        <img src={idx.img} alt="Cyfonii" />
                                                    </Link>
                                                </div>
                                                <div className="content">
                                                    <Link to="/team" className="h5 name">{idx.name}</Link>
                                                    <p className="postion">
                                                        {idx.position}
                                                    </p>

                                                    <ul className="list-social">
                                                        <li><a href={idx.links.link1} target='_blank'>
                                                            <FontAwesomeIcon icon={faLinkedin} />
                                                        </a></li>
                                                        <li><a href={idx.links.link2}>
                                                            <FontAwesomeIcon icon={faGithub} target='_blank' />
                                                        </a></li>
                                                        {/* <li><Link to="#">
                                                            <FontAwesomeIcon icon={faTwitter} />
                                                        </Link></li> */}
                                                    </ul>
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
        </section>
    );
}

export default Team5;
