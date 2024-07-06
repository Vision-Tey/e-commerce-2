import React from 'react'
import './Category.css'
import feature1 from '../assets/images/Categories/fetured-item-1.png'
import feature2 from '../assets/images/Categories/fetured-item-2.png'
import feature3 from '../assets/images/Categories/fetured-item-3.png'
import feature4 from '../assets/images/Categories/fetured-item-4.png'
import feature5 from '../assets/images/Categories/fetured-item-5.png'
import feature6 from '../assets/images/Categories/fetured-item-6.png'

function Categories() {
    return (
        <section className="featured-categories section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Featured Categories</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-category">
                            <h3 className="heading">TV & Audios</h3>
                            <ul>
                                <li><a href="product-grids.html">Smart Television</a></li>
                                <li><a href="product-grids.html">QLED TV</a></li>
                                <li><a href="product-grids.html">Audios</a></li>
                                <li><a href="product-grids.html">Headphones</a></li>
                                <li><a href="product-grids.html">View All</a></li>
                            </ul>
                            <div className="images">
                                <img src={feature1} alt="#" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-category">
                            <h3 className="heading">Desktop & Laptop</h3>
                            <ul>
                                <li><a href="product-grids.html">Smart Television</a></li>
                                <li><a href="product-grids.html">QLED TV</a></li>
                                <li><a href="product-grids.html">Audios</a></li>
                                <li><a href="product-grids.html">Headphones</a></li>
                                <li><a href="product-grids.html">View All</a></li>
                            </ul>
                            <div className="images">
                                <img src={feature2} alt="#" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-category">
                            <h3 className="heading">Cctv Camera</h3>
                            <ul>
                                <li><a href="product-grids.html">Smart Television</a></li>
                                <li><a href="product-grids.html">QLED TV</a></li>
                                <li><a href="product-grids.html">Audios</a></li>
                                <li><a href="product-grids.html">Headphones</a></li>
                                <li><a href="product-grids.html">View All</a></li>
                            </ul>
                            <div className="images">
                                <img src={feature3} alt="#" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-category">
                            <h3 className="heading">Dslr Camera</h3>
                            <ul>
                                <li><a href="product-grids.html">Smart Television</a></li>
                                <li><a href="product-grids.html">QLED TV</a></li>
                                <li><a href="product-grids.html">Audios</a></li>
                                <li><a href="product-grids.html">Headphones</a></li>
                                <li><a href="product-grids.html">View All</a></li>
                            </ul>
                            <div className="images">
                                <img src={feature4} alt="#" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-category">
                            <h3 className="heading">Smart Phones</h3>
                            <ul>
                                <li><a href="product-grids.html">Smart Television</a></li>
                                <li><a href="product-grids.html">QLED TV</a></li>
                                <li><a href="product-grids.html">Audios</a></li>
                                <li><a href="product-grids.html">Headphones</a></li>
                                <li><a href="product-grids.html">View All</a></li>
                            </ul>
                            <div className="images">
                                <img src={feature5} alt="#" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-category">
                            <h3 className="heading">Game Console</h3>
                            <ul>
                                <li><a href="product-grids.html">Smart Television</a></li>
                                <li><a href="product-grids.html">QLED TV</a></li>
                                <li><a href="product-grids.html">Audios</a></li>
                                <li><a href="product-grids.html">Headphones</a></li>
                                <li><a href="product-grids.html">View All</a></li>
                            </ul>
                            <div className="images">
                                <img src={feature6} alt="#" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
