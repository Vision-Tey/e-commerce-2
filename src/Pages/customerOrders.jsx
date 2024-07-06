import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { db } from '../firebase';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

function CustomerOrders() {
    const [orders, setOrders] = React.useState([]);
    const [{ user }] = useStateValue();
    //get all orders from firebase
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                order: doc.data()
            })));
        });

        return () => unsubscribe();
    }, [db]);
    console.log(orders);
    console.log(user);

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Order List</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><Link to="/"><i className="lni lni-home"></i> Home</Link></li>
                                <li>Orders</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="shopping-cart section">
                <div className="container">
                    <div className="cart-list-head">
                        <div className="cart-list-title">
                            <div className="row">
                                <div className="col-lg-1 col-md-3 col-12">
                                    <p>No.</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <p>Order No.</p>
                                </div>
                                <div className="col-lg-1 col-md-1 col-12">
                                    <p> Cart Total</p>
                                </div>
                                <div className="col-lg-1 col-md-3 col-12">
                                    <p>Shipping</p>
                                </div>
                                <div className="col-lg-1 col-md-3 col-12">
                                    <p>Total</p>
                                </div>
                                <div className="col-lg-1 col-md-2 col-12">
                                    <p>Items</p>
                                </div>
                                <div className="col-lg-1 col-md-2 col-12">
                                    <p>Date</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>Username</p>
                                </div>
                                <div className="col-lg-1 col-md-2 col-12">
                                    <p>Status</p>
                                </div>
                            </div>
                        </div>

                        {

                            orders.filter(({ id, order }) => order.username === user).map(({ id, order }, index) => (
                                <div className="cart-single-list product-line" key={id}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-1 col-md-3 col-12">
                                            <p>{index + 1}</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-12">
                                            <Link key={id}
                                                to={{
                                                    pathname: `/order/${id}`,
                                                    state: order,
                                                }}
                                            >
                                                <p>{id}</p>
                                            </Link>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-12">
                                            <p>{order.cartsubtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                        </div>
                                        <div className="col-lg-1 col-md-3 col-12">
                                            <p>{order.shipping.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                        </div>
                                        <div className="col-lg-1 col-md-3 col-12">
                                            <p>
                                                {
                                                    order.ordertotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                                                }
                                            </p>
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-12">
                                            <p>{
                                                order.cart?.length.toFixed(2)
                                            }</p>
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-12">
                                            <p>{
                                                order.timestamp.toDate().toLocaleDateString()
                                            }</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12">
                                            <p>{order.username}</p>
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-12">
                                            <p>{order.order_status}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerOrders
