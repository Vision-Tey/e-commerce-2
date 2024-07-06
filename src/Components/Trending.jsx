import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'

function Trending() {
    const [products, setProducts] = useState([]);

    //get data from firebase
    // useEffect(() => {
    //     db.collection('products')
    //         .onSnapshot(snapshot => {
    //             setProducts(snapshot.docs.map(doc => ({
    //                 id: doc.id,
    //                 product: doc.data()
    //             })))
    //         })
    // }, [])

    return (

        // <!-- Start Trending Product Area -->
        <section className="trending-product section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Trending Product</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        products.slice(0, 8).map(({ id, product }) => (
                            <div className="col-lg-3 col-md-6 col-12" key={id}>
                                {/* <!-- Start Single Product --> */}
                                <div className="single-product">
                                    <div className="product-image">
                                        <img src={product.image} alt="#" />
                                        {
                                            product.discount === 0 ? ('') : (
                                                <span className="sale-tag">-{product.discount}%</span>
                                            )
                                        }
                                        <Link key={product.id}
                                            to={{
                                                pathname: `/product/${id}`,
                                                state: product,
                                            }}
                                        >
                                            <div className="button">
                                                <button className="btn"><i className="lni lni-cart"></i> Add to Cart</button>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="product-info">
                                        <span className="category">{product.category}</span>
                                        <h4 className="title">
                                            <a href="product-grids.html">{product.name}</a>
                                        </h4>
                                        <ul className="review">
                                            {
                                                Array(product.rating).fill().map((_, index) => (
                                                    <li key={index}><i className="lni lni-star-filled"></i></li>
                                                ))
                                            }
                                            <li><span>{product.rating} Review(s)</span></li>
                                        </ul>
                                        <div className="price">
                                            {
                                                product.discount === 0 ? (
                                                    <span>
                                                        {
                                                            product.price.toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 2,
                                                            })
                                                        }
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {
                                                            (product.price - (product.price * product.discount / 100)).toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 2,
                                                            })
                                                        }
                                                    </span>
                                                )

                                            }
                                            {
                                                product.discount === 0 ? ('') : (
                                                    <span className="discount-price">
                                                        {
                                                            product.price.toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 2,
                                                            })
                                                        }
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Product --> */}
                            </div>

                        ))
                    }
                </div>
            </div>
        </section>
        //  ending the trending area
    )
}

export default Trending
