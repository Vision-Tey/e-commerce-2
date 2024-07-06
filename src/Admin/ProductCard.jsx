import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ item, id, index }) {
    return (
        <>
            <div className="cart-single-list product-line">
                <div className="row align-items-center">
                    <div className="col-lg-1 col-md-3 col-12">
                        <p>
                            {index + 1}
                        </p>
                    </div>
                    <div className="col-lg-1 col-md-1 col-12">
                        <Link to="/admin"><img src={item.image} alt="#" className="product-image-card" /></Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12">
                        <p>
                            {id}
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <p><Link
                            to="/admin"
                        >
                            {item.name}
                        </Link>
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p>
                            <span className="price">{item.category}</span>
                        </p>
                    </div>
                    <div className="col-lg-1 col-md-2 col-12">
                        <p>
                            {

                                parseInt(item.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })

                            }
                        </p>
                    </div>
                    <div className="col-lg-1 col-md-2 col-12">
                        <p>
                            {
                                parseInt(item.quantity).toFixed(2)
                            }
                        </p>
                    </div>
                    <div className="col-lg-1 col-md-2 col-12">
                        <p>
                            {
                                parseInt(item.rating)
                            }
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
