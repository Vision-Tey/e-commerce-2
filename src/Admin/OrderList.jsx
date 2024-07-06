import React, { useEffect } from 'react'
import './OrderList.css';
import { db } from '../firebase';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import LoginAdmin from './LoginAdmin'

function OrderList() {
    const [orders, setOrders] = React.useState([]);
    const [{ admin }] = useStateValue();

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

    function OrderDate({ order }) {
        // const formatDate = (timestamp) => {
        //     const date = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date object
        //     return date.toLocaleDateString(); // Convert JavaScript Date to local date string
        // };
    
        return (
            <p>Date</p>
        );
    }
    return (
        <>
            {!admin ? <LoginAdmin /> :
                (
                    <>
                        <div className="breadcrumbs admin-breads">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="breadcrumbs-content">
                                            <h1 className="page-title">Order List</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <ul className="breadcrumb-nav">
                                            <li><Link to="/admin"><i className="lni lni-home"></i> Home</Link></li>
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
                                            <div className="col-lg-2 col-md-3 col-12">
                                                <p>Order Total</p>
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
                                        </div>
                                    </div>

                                    {

                                        orders.map(({ id, order }, index) => (
                                            <div className="cart-single-list product-line" key={id}>
                                                <div className="row align-items-center">
                                                    <div className="col-lg-1 col-md-3 col-12">
                                                        <p>{index + 1}</p>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-12">
                                                        <Link key={id}
                                                            to={{
                                                                pathname: `/admin/order/${id}`,
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
                                                    <div className="col-lg-2 col-md-3 col-12">
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
                                                        {/* <p>{
                                                            order.timestamp.toDate().toLocaleDateString()
                                                        }</p> */}
                                                        {
                                                            <OrderDate order={order} />
                                                        }
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-12">
                                                        <p>{order.username}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                )}
        </>
    )
}

export default OrderList
