import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../assets/images/hero/slider-bg1.jpg'
import slider2 from '../assets/images/hero/slider-bg2.jpg'
import smallBanner from '../assets/images/hero/slider-bnr.jpg'



// import "swiper/swiper-bundle.min.css"
// import "swiper/swiper.min.css";
// import "swiper/components/effect-coverflow/effect-coverflow.min.css"
// import "swiper/components/pagination/pagination.min.css"
// import "swiper/components/navigation/navigation.min.css"
// import "swiper/components/scrollbar/scrollbar.min.css"


// import Swiper core and required modules

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import SwiperCore, {
//     Pagination, Navigation, Autoplay
// } from 'swiper';


// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// install Swiper modules
// SwiperCore.use([Pagination, Navigation, Autoplay]);

function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true} pagination={{
                    "clickable": true
                }}
                navigation={false}
                autoplay={{
                    delay: 8000,
                    // pauseOnMouseEnter: false
                }}
                className="mySwiper">
                <SwiperSlide>
                    {/* <!-- Start Single Slider --> */}
                    <div className="single-slider"
                        style={{ backgroundImage: `url(${slider1})` }}
                    >
                        <div className="content">
                            <h2><span>No restocking fee ($35 savings)</span>
                                M75 Sport Watch
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <h3><span>Now Only</span> $320.99</h3>
                            <div className="button">
                                <a href="/" className="btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Single Slider --> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <!-- Start Single Slider --> */}
                    <div className="single-slider"
                        style={{ backgroundImage: `url(${slider2})` }}
                    >
                        <div className="content">
                            <h2>
                                <span>Big Sale Offer</span>
                                Get the Best Deal on CCTV Camera
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                            <h3><span>Combo Only:</span> $590.00</h3>
                            <div className="button">
                                <a href="/" className="btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Single Slider --> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <!-- Start Single Slider --> */}
                    <div className="single-slider"
                        style={{ backgroundImage: `url(${smallBanner})` }}
                    >
                        <div className="content">
                            <h2><span>No restocking fee ($35 savings)</span>
                                iPhone 12 Pro Max
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <h3><span>Now Only</span> $259.99</h3>
                            <div className="button">
                                <a href="product-grids.html" className="btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Single Slider --> */}
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider
