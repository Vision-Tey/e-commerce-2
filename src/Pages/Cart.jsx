import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider'
import CartProduct from '../Components/CartProduct';

function Cart() {
    const [{ basket, user }] = useStateValue();
    let orderTotal = 0;
    let total = 0;
    for (let i = 0; i < basket?.length; i++) {
        const item = basket[i];
        orderTotal = orderTotal + item.originalPrice;
        total = total + item.price;
    }

    let delivery = 0;
    if (total > 35) {
        delivery = 12.99;
    } else if (total > 15 && total <= 35) {
        delivery = 4.99;
    } else if (total > 0 && total <= 15) {
        delivery = 2.99;
    }

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Cart</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="/"><i className="lni lni-home"></i> Home</a></li>
                                <li><a href="/">Shop</a></li>
                                <li>Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shopping-cart section">
                <div className="container">
                    <div className="cart-list-head">

                        {
                            basket?.length === 0 ? ('') : (
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
                            basket?.length === 0 ? (
                                <div className="cart-single-list">
                                    <div className="row align-items-center">
                                        <div className="col-lg-1 col-md-1 col-12 empty-cart">
                                            <span>Your Cart is Empty</span>
                                        </div>
                                    </div>
                                </div>) : (
                                basket.map((item, index) => (
                                    <CartProduct item={item} key={item.id} />
                                ))
                            )

                        }
                    </div>

                    {
                        basket?.length === 0 ? ('') : (
                            <div className="row">
                                <div className="col-12">

                                    <div className="total-amount">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-6 col-12">
                                                <div className="left">
                                                    <div className="coupon">
                                                        <form>
                                                            <input name="Coupon" placeholder="Enter Your Coupon" />
                                                            <div className="button">
                                                                <button className="btn">Apply Coupon</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="right">
                                                    <ul>
                                                        <li>Cart Subtotal<span>
                                                            {
                                                                parseFloat(orderTotal).toLocaleString('en-US', {
                                                                    style: 'currency',
                                                                    currency: 'USD',
                                                                    maximumFractionDigits: 2,
                                                                })
                                                            }
                                                        </span></li>
                                                        <li>Shipping<span>
                                                            {
                                                                basket?.length === 0 ? (
                                                                    <p>0.00</p>
                                                                ) : (
                                                                    <p>
                                                                        {
                                                                            parseFloat(delivery).toLocaleString('en-US', {
                                                                                style: 'currency',
                                                                                currency: 'USD',
                                                                                maximumFractionDigits: 2,
                                                                            })
                                                                        }
                                                                    </p>)
                                                            }
                                                        </span></li>
                                                        <li>You Save<span>
                                                            {
                                                                (parseFloat(orderTotal) - parseFloat(total)).toLocaleString('en-US', {
                                                                    style: 'currency',
                                                                    currency: 'USD',
                                                                    maximumFractionDigits: 2,
                                                                })
                                                            }
                                                        </span></li>
                                                        <li className="last">You Pay<span>
                                                            {
                                                                basket?.length === 0 ? (
                                                                    <p>0.00</p>
                                                                ) : (
                                                                    <p>{(
                                                                        basket.reduce((acc, item) => acc + parseFloat(item.price) * parseFloat(item.quantity), 0) + parseFloat(delivery)
                                                                    ).toLocaleString('en-US', {
                                                                        style: 'currency',
                                                                        currency: 'USD',
                                                                        maximumFractionDigits: 2,
                                                                    })}</p>)
                                                            }
                                                        </span></li>
                                                    </ul>

                                                    <div className="button">
                                                        {
                                                            user ? (
                                                                <Link to="/checkout" className="btn">Checkout</Link>
                                                            ) : (
                                                                <Link to="/login" className="btn">Login to Checkout</Link>
                                                            )
                                                        }

                                                        <Link to="/products" className="btn btn-alt">Continue shopping</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Cart
