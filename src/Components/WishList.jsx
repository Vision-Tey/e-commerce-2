import React from 'react'
import { useStateValue } from '../Context/StateProvider';
import WishCard from './WishCard';

function WishList() {
    const [{ wishlist }] = useStateValue();
    let orderTotal = 0;
    let total = 0;
    for (let i = 0; i < wishlist?.length; i++) {
        const item = wishlist[i];
        orderTotal = orderTotal + item.originalPrice;
        total = total + item.price;
    }

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Wish List</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="/"><i className="lni lni-home"></i> Home</a></li>
                                <li><a href="/">Shop</a></li>
                                <li>Wish List</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shopping-cart section">
                <div className="container">
                    <div className="cart-list-head">

                        {
                            wishlist?.length === 0 ? ('') : (
                                <div className="cart-list-title">
                                    <div className="row">
                                        <div className="col-lg-1 col-md-1 col-12">
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-12">
                                            <p>Product Name</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12">
                                            <p>Qty</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12">
                                            <p>Unit Price</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12">
                                            <p>Discount</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12">
                                            <p>Subtotal</p>
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-12">
                                            <p>Remove</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        {
                            wishlist?.length === 0 ? (
                                <div className="cart-single-list">
                                    <div className="row align-items-center">
                                        <div className="col-lg-1 col-md-1 col-12 empty-cart">
                                            <span>Your Wish List is Empty</span>
                                        </div>
                                    </div>
                                </div>) : (
                                wishlist.map((item, index) => (
                                    <WishCard wish={item} key={item.id} />
                                ))
                            )

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList
