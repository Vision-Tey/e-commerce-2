import React, { useState } from 'react'
import { useStateValue } from '../Context/StateProvider'
import { db } from '../firebase';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './Checkout.css'
import { useNavigate } from "react-router-dom";
import Login from '../Pages/Login';

function Checkout() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (fullName === '' || email === '' || phone === '' || city === '' || region === '' || country === '' || address === '') {
            setError('Please fill in all fields');
            return;
        }

        try {
            const docRef = await addDoc(collection(db, 'orders'), {
                timestamp: serverTimestamp(),
                ordertotal: orderTotal + delivery,
                shipping: delivery,
                cart: basket,
                username: user,
                cartsubtotal: orderTotal,
                order_status: 'pending',
                customer: {
                    name: fullName,
                    email: email,
                    phonenumber: phone,
                },
                address: {
                    city: city,
                    region: region,
                    country: country,
                    placeOfResidence: address
                }
            });

            dispatch({
                type: 'EMPTY_BASKET'
            });

            setFullName('');
            setEmail('');
            setPhone('');
            setCity('');
            setRegion('');
            setCountry('');
            setAddress('');
            setError('');
            alert('Order Placed Successfully');
            navigate('/');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }
    return (
        <>
            {user ? (
                <>
                    <div className="breadcrumbs">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="breadcrumbs-content">
                                        <h1 className="page-title">checkout</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul className="breadcrumb-nav">
                                        <li><a href="/"><i className="lni lni-home"></i> Home</a></li>
                                        <li><a href="/">Shop</a></li>
                                        <li>checkout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="checkout-wrapper section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="checkout-steps-form-style-1">
                                        <form id="accordionExample">
                                            {
                                                error !== '' ? (
                                                    <div className="alert alert-danger">
                                                        {error}
                                                    </div>
                                                ) : ('')
                                            }
                                            <h6 className="title" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree">Your Personal Details </h6>
                                            <section className="checkout-steps-form-content collapse show" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="single-form form-default">
                                                            <label>Full Name</label>
                                                            <div className="row">
                                                                <div className="col-md-12 form-input form">
                                                                    <input type="text" placeholder="Full Name" value={fullName} onChange={event => setFullName(event.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>Email Address</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="Email Address" value={email} onChange={event => setEmail(event.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>Phone Number</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="Phone Number" value={phone} onChange={event => setPhone(event.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <hr />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>Country</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="Country" value={country} onChange={event => setCountry(event.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>City</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="City" value={city} onChange={event => setCity(event.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>Place Of Residence</label>
                                                            <div className="form-input form">
                                                                <textarea type="text" placeholder="Place Of Residence" rows="20" className="text-area-check" value={address} onChange={event => setAddress(event.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>Region/State</label>
                                                            <div className="select-items">
                                                                <select className="form-control" onChange={event => setRegion(event.target.value)}>
                                                                    <option value="">select</option>
                                                                    <option value="Eastern">Eastern</option>
                                                                    <option value="Western">Western</option>
                                                                    <option value="Northern">Northern</option>
                                                                    <option value="Central">Central</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <div className="price-table-btn button">
                                                                <button className="btn btn-alt" onClick={handleSubmit} >Checkout</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </form>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="col-lg-4">
                                    <div className="checkout-sidebar">
                                        <div className="checkout-sidebar-coupon">
                                            <p>Appy Coupon to get discount!</p>
                                            <form action="#">
                                                <div className="single-form form-default">
                                                    <div className="form-input form">
                                                        <input type="text" placeholder="Coupon Code" />
                                                    </div>
                                                    <div className="button">
                                                        <button className="btn">apply</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="checkout-sidebar-price-table mt-30">
    <h5 className="title">Pricing Table</h5>
    <div className="sub-total-price">
        <div className="total-price">
            <p className="value">Cart Subtotal:</p>
            <p className="price">
                {
                    parseFloat(orderTotal).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 2,
                    })
                }
            </p>
        </div>
        <div className="total-price shipping">
            <p className="value">Shipping:</p>
            <p className="price">
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
                        </p>
                    )
                }
            </p>
        </div>
        <div className="total-price discount">
            <p className="value">You Save:</p>
            <p className="price">
                {
                    (parseFloat(orderTotal) - parseFloat(total)).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 2,
                    })
                }
            </p>
        </div>
    </div>
    <div className="total-payable">
        <div className="payable-price">
            <p className="value">You Pay:</p>
            <p className="price">
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
            </p>
        </div>
    </div>
</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <Login />
            )
            }
        </>
    )
}

export default Checkout
