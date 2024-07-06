import React from 'react'
import './Seller.css'
import sell1 from '../assets/images/Seller/01.jpg'
import sell2 from '../assets/images/Seller/02.jpg'
import sell3 from '../assets/images/Seller/03.jpg'
import sell4 from '../assets/images/Seller/04.jpg'
import sell5 from '../assets/images/Seller/05.jpg'
import sell6 from '../assets/images/Seller/06.jpg'
import sell7 from '../assets/images/Seller/07.jpg'
import sell8 from '../assets/images/Seller/08.jpg'
import sell9 from '../assets/images/Seller/09.jpg'

function Seller() {
    return (
        <>
            <section className="home-product-list section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 custom-responsive-margin">
                            <h4 className="list-title">Best Sellers</h4>

                            <div className="single-list">
                                <div className="list-image">
                                    <a href="product-grids.html"><img src={sell1} alt="#" /></a>
                                </div>
                                <div className="list-info">
                                    <h3>
                                        <a href="product-grids.html">GoPro Hero4 Silver</a>
                                    </h3>
                                    <span>$287.99</span>
                                </div>
                            </div>
                            <div className="single-list">
                                <div className="list-image">
                                    <a href="product-grids.html"><img src={sell2} alt="#" /></a>
                                </div>
                                <div className="list-info">
                                    <h3>
                                        <a href="product-grids.html">Puro Sound Labs BT2200</a>
                                    </h3>
                                    <span>$95.00</span>
                                </div>
                            </div>
                            <div className="single-list">
                                <div className="list-image">
                                    <a href="product-grids.html"><img src={sell3} alt="#" /></a>
                                </div>
                                <div className="list-info">
                                    <h3>
                                        <a href="product-grids.html">HP OfficeJet Pro 8710</a>
                                    </h3>
                                    <span>$120.00</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-4 col-12 custom-responsive-margin">
                            <h4 className="list-title">New Arrivals</h4>

                            <div className="single-list">
                                <div className="list-image">
                                    <a href="product-grids.html"><img src={sell4} alt="#" /></a>
                                </div>
                                <div className="list-info">
                                    <h3>
                                        <a href="product-grids.html">iPhone X 256 GB Space Gray</a>
                                    </h3>
                                    <span>$1150.00</span>
                                </div>
                            </div>


                            <div className="single-list">
                                <div className="list-image">
                                    <a href="product-grids.html"><img src={sell5} alt="#" /></a>
                                </div>
                                <div className="list-info">
                                    <h3>
                                        <a href="product-grids.html">Canon EOS M50 Mirrorless Camera</a>
                                    </h3>
                                    <span>$950.00</span>
                                </div>
                            </div>


                            <div className="single-list">
                                <div className="list-image">
                                    <a href="product-grids.html"><img src={sell6} alt="#" /></a>
                                </div>
                                <div className="list-info">
                                    <h3>
                                        <a href="product-grids.html">Microsoft Xbox One S</a>
                                    </h3>
                                    <span>$298.00</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <h4 className="list-title">Top Rated</h4>

                            <div className="single-list">
                                <div className="list-image">
                                    <a href="product-grids.html"><img src={sell7} alt="#" /></a>
                                </div>
                                <div className="list-info">
                                    <h3>
                                        <a href="product-grids.html">Samsung Gear 360 VR Camera</a>
                                    </h3>
                                    <span>$68.00</span>
                                </div>
                            </div>


                            <div className="single-list">
                                <div className="list-image">
                                    <a href="product-grids.html"><img src={sell8} alt="#" /></a>
                                </div>
                                <div className="list-info">
                                    <h3>
                                        <a href="product-grids.html">Samsung Galaxy S9+ 64 GB</a>
                                    </h3>
                                    <span>$840.00</span>
                                </div>
                            </div>


                            <div className="single-list">
                                <div className="list-image">
                                    <a href="product-grids.html"><img src={sell9} alt="#" /></a>
                                </div>
                                <div className="list-info">
                                    <h3>
                                        <a href="product-grids.html">Zeus Bluetooth Headphones</a>
                                    </h3>
                                    <span>$28.00</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Seller
