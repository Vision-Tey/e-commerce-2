import React, { useEffect, useState } from 'react'
import '../Pages/Cart.css'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard';
import { db } from '../firebase'
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { useStateValue } from '../Context/StateProvider';
import LoginAdmin from './LoginAdmin'

function ProductList() {
    const [products, setProducts] = useState([]);
    const [{ admin }] = useStateValue();
    //get data from firebase
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

    return (
        <>
            {!admin ? <LoginAdmin /> : (
                <>
                    <div className="breadcrumbs admin-breads">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="breadcrumbs-content">
                                        <h1 className="page-title">Products List</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul className="breadcrumb-nav">
                                        <li><Link to="/admin"><i className="lni lni-home"></i> Home</Link></li>
                                        <li>Products</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shopping-cart section">
                        <div className="container">
                            <div className="cart-list-head">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6 col-12 row-admd">
                                        <div className="cart-list-head-right row-add">
                                            <Link to="/admin/createproduct"><i className="lni lni-plus"></i> Add Product</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-list-title">
                                    <div className="row">
                                        <div className="col-lg-1 col-md-3 col-12">
                                            <p> No.</p>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-12">
                                            <p> Image</p>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-12">
                                            <p>Product ID</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-12">
                                            <p>Product Name</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12">
                                            <p>Category</p>
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-12">
                                            <p>Unit Price</p>
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-12">
                                            <p>Quantity</p>
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-12">
                                            <p>Rating</p>
                                        </div>

                                    </div>
                                </div>

                                {

                                    products.map(({ id, product }, index) => (

                                        <ProductCard key={id} id={id} item={product} index={index} />
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

export default ProductList
