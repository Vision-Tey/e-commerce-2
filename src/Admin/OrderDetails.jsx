import React from 'react'
import { Link } from 'react-router-dom'
import './OrderDetails.css'
import { useLocation, useParams } from "react-router-dom";
import { useStateValue } from '../Context/StateProvider';
import LoginAdmin from './LoginAdmin'

function OrderDetails() {
    const location = useLocation();
    const order = location.state;
    const { id } = useParams();
    const [{ admin }] = useStateValue();

    return (
        <>
            {!admin ? <LoginAdmin /> : (
                <>
                    <div className="breadcrumbs admin-breads">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="breadcrumbs-content">
                                        <h1 className="page-title">{
                                            // order.order_status === 'pending' ? 'Pending Orders' :
                                            order.username + ' -|- ' + order.order_status
                                        }</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul className="breadcrumb-nav">
                                        <li><Link to="/admin"><i className="lni lni-home"></i> Home</Link></li>
                                        <li>Order</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container order-details">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 col-12 row-admd">
                                <div className="cart-list-head-right row-add">
                                    <Link to="/admin/orders"><i className="lni lni-list icon-list-prod"></i> Order List</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="order-details-wrapper">
                                    <div className="order-details-header">
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="order-header-left">
                                                <h6 className="order-number">Order #{id}</h6>
                                                <div className="order-date">{`Order.... Date: ${order.timestamp.toDate().toLocaleDateString()}`}</div>
                                                <div className="order-date">{`Order. -Status: ${order.order_status}`}</div>
                                                <div className="order-date">{`Customer. Name: ${order.customer.name}`}</div>
                                                <div className="order-date">{`Customer Email: ${order.customer.email}`}</div>
                                                <div className="order-date">{`Customer Phone: ${order.customer.phonenumber}`}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12 header-right-container">

                                            <div className="order-header-right">
                                                <h6>Address</h6>
                                                <div className="order-total">
                                                    <p className="order-total-title">{`Country:   ${order.address.country}`}</p>
                                                    <p className="order-total-price"> {`City:   ${order.address.city}`}</p>
                                                    <p className="order-total-price"> {`Residence:   ${order.address.placeOfResidence}`}</p>
                                                    <p className="order-total-price"> {`Region:   ${order.address.region}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-details-body">
                                        <div className="order-details-table">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Image</th>
                                                            <th>Product Name</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            order.cart.map(item => {
                                                                return (
                                                                    <tr key={item.id}>
                                                                        <td>
                                                                            <div className="product-image">
                                                                                <Link to={`/admin/products`}>
                                                                                    <img src={item.image} alt="product" className="product-image-card" />
                                                                                </Link>
                                                                            </div>
                                                                        </td>
                                                                        <td><Link to={`/admin/products`}>{item.name}</Link></td>
                                                                        <td>{item.price}</td>
                                                                        <td>{item.quantity}</td>
                                                                        <td>{item.price * item.quantity}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="order-details-footer">
                                            <div className="order-details-total">
                                                <div className="subtotal-title">Subtotal</div>
                                                <div className="subtotal-amount">{order.ordertotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                                            </div>
                                            <div className="order-details-total">
                                                <div className="charge-title">Shipping</div>
                                                <div className="charge-amount">{order.shipping.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                                            </div>
                                            <div className="order-details-total">
                                                <div className="total-title">Total</div>
                                                <div className="total-amount">{order.cartsubtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}

export default OrderDetails
