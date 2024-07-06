import React from 'react'
import smallBanner from '../assets/images/hero/slider-bnr.jpg'
import Slider from './Slider'

function Heros() {
    return (
        // < !--Start Hero Area-- >
        <section className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12 custom-padding-right">
                        <div className="slider-head">
                            {/* <!-- Start Hero Slider --> */}
                            <div className="hero-slider">
                                <Slider />
                            </div>
                            {/* <!-- End Hero Slider --> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                                {/* <!-- Start Small Banner --> */}
                                <div className="hero-small-banner"
                                    style={{ backgroundImage: `url(${smallBanner})` }}
                                >
                                    <div className="content">
                                        <h2>
                                            <span>New line required</span>
                                            iPhone 12 Pro Max
                                        </h2>
                                        <h3>$259.99</h3>
                                    </div>
                                </div>
                                {/* <!-- End Small Banner --> */}
                            </div>
                            <div className="col-lg-12 col-md-6 col-12">
                                {/* <!-- Start Small Banner --> */}
                                <div className="hero-small-banner style2">
                                    <div className="content">
                                        <h2>Weekly Sale!</h2>
                                        <p>Saving up to 50% off all online store items this week.</p>
                                        <div className="button">
                                            <a className="btn" href="product-grids.html">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Start Small Banner --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <!--End Hero Area-- >
    )
}

export default Heros
