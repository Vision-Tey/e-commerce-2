import React from 'react'
import banner1 from '../assets/images/banner/banner-1-bg.jpg'
import banner2 from '../assets/images/banner/banner-2-bg.jpg'


function Banner() {
    return (
        <section className="special-offer section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Special Offer</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">

                                <div className="single-product">
                                    <div className="product-image">
                                        <img src="assets/images/products/product-3.jpg" alt="#" />
                                        <div className="button">
                                            <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to
                                                Cart</a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <span className="category">Camera</span>
                                        <h4 className="title">
                                            <a href="product-grids.html">WiFi Security Camera</a>
                                        </h4>
                                        <ul className="review">
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><span>5.0 Review(s)</span></li>
                                        </ul>
                                        <div className="price">
                                            <span>$399.00</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 col-12">

                                <div className="single-product">
                                    <div className="product-image">
                                        <img src="assets/images/products/product-8.jpg" alt="#" />
                                        <div className="button">
                                            <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to
                                                Cart</a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <span className="category">Laptop</span>
                                        <h4 className="title">
                                            <a href="product-grids.html">Apple MacBook Air</a>
                                        </h4>
                                        <ul className="review">
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><span>5.0 Review(s)</span></li>
                                        </ul>
                                        <div className="price">
                                            <span>$899.00</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-4 col-12">

                                <div className="single-product">
                                    <div className="product-image">
                                        <img src="assets/images/products/product-6.jpg" alt="#" />
                                        <div className="button">
                                            <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to
                                                Cart</a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <span className="category">Speaker</span>
                                        <h4 className="title">
                                            <a href="product-grids.html">Bluetooth Speaker</a>
                                        </h4>
                                        <ul className="review">
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star-filled"></i></li>
                                            <li><i className="lni lni-star"></i></li>
                                            <li><span>4.0 Review(s)</span></li>
                                        </ul>
                                        <div className="price">
                                            <span>$70.00</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="single-banner right" style={{ backgroundImage: `url('assets/images/banner/banner-3-bg.jpg')` }}>
                            {/* ;margin-top: 30px;" */}
                            <div className="content">
                                <h2>Samsung Notebook 9 </h2>
                                <p>Lorem ipsum dolor sit amet, <br />eiusmod tempor
                                    incididunt ut labore.</p>
                                <div className="price">
                                    <span>$590.00</span>
                                </div>
                                <div className="button">
                                    <a href="product-grids.html" className="btn">Shop Now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="offer-content">
                            <div className="image">
                                <img src="assets/images/offer/offer-image.jpg" alt="#" />
                                <span className="sale-tag">-50%</span>
                            </div>
                            <div className="text">
                                <h2><a href="product-grids.html">Bluetooth Headphone</a></h2>
                                <ul className="review">
                                    <li><i className="lni lni-star-filled"></i></li>
                                    <li><i className="lni lni-star-filled"></i></li>
                                    <li><i className="lni lni-star-filled"></i></li>
                                    <li><i className="lni lni-star-filled"></i></li>
                                    <li><i className="lni lni-star-filled"></i></li>
                                    <li><span>5.0 Review(s)</span></li>
                                </ul>
                                <div className="price">
                                    <span>$200.00</span>
                                    <span className="discount-price">$400.00</span>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry incididunt ut
                                    eiusmod tempor labores.</p>
                            </div>
                            <div className="box-head">
                                <div className="box">
                                    <h1 id="days">000</h1>
                                    <h2 id="daystxt">Days</h2>
                                </div>
                                <div className="box">
                                    <h1 id="hours">00</h1>
                                    <h2 id="hourstxt">Hours</h2>
                                </div>
                                <div className="box">
                                    <h1 id="minutes">00</h1>
                                    <h2 id="minutestxt">Minutes</h2>
                                </div>
                                <div className="box">
                                    <h1 id="seconds">00</h1>
                                    <h2 id="secondstxt">Secondes</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // echo "# courier-Gryffindor-frontend" >> README.md
        // git init
        // git add README.md
        // git commit -m "first commit"
        // git branch -M main
        // git remote add origin https://github.com/outboxafrica/courier-Gryffindor-frontend.git
        // git push -u origin main

    )
}

export default Banner
