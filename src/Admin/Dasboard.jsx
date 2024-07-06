import React from 'react'
import './Dasboard.css'
import { db } from '../firebase'
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Dasboard() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [orders, setOrders] = useState([]);

    // get products from firebase
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
            setProducts(snapshot.docs.map(doc => ({
                id: doc.id,
                product: doc.data()
            })));
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [db]);

    // categories
    useEffect(() => {
        // Reference to the 'categories' collection
        const categoriesCollection = collection(db, 'categories');

        // Set up the onSnapshot listener
        const unsubscribe = onSnapshot(categoriesCollection, (snapshot) => {
            setCategories(snapshot.docs.map(doc => ({
                id: doc.id,
                category: doc.data()
            })));
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [db]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                order: doc.data()
            })));
        });

        return () => unsubscribe();
    }, [db]);

    return (
        <>
            <div className="breadcrumbs admin-breads">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">DashBoard</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><Link to="/admin"><i className="lni lni-home"></i> Home</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section class="trending-product section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product users-card">
                                <div class="product-info users-card">
                                    <span class="category">Users</span>
                                    <h4 class="title">
                                        <hr />
                                    </h4>
                                    <div class="price">
                                        <span className="users">
                                            0.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product">
                                <Link to="/admin/products" className="title-container">
                                    <div class="product-info">
                                        <span class="category">Products</span>
                                        <h4 class="title">
                                            <hr />
                                        </h4>
                                        <div class="price">
                                            <span>
                                                {products?.length.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product">
                                <Link to="/admin/orders" className="title-container">
                                    <div class="product-info">
                                        <span class="category">Orders</span>
                                        <h4 class="title">
                                            <hr />
                                        </h4>
                                        <div class="price">
                                            <span>
                                                {orders?.length.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product inbox-card">
                                <Link to="/admin/categories" className="title-container">
                                    <div class="product-info inbox-card">
                                        <span class="category">Categories</span>
                                        <h4 class="title">
                                            <hr />
                                        </h4>
                                        <div class="price">
                                            <span className="inbox">
                                                {categories?.length.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Dasboard
