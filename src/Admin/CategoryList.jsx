import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import CategoryCard from './CategoryCard';
import './CategoryList.css';
import { useStateValue } from '../Context/StateProvider';
import LoginAdmin from './LoginAdmin'

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [{ admin }] = useStateValue();
    //get data from firebase
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
    console.log(categories);
    return (
        <>
            {!admin ? <LoginAdmin /> : (
                <>
                    <div className="breadcrumbs admin-breads">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="breadcrumbs-content">
                                        <h1 className="page-title">Category List</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul className="breadcrumb-nav">
                                        <li><Link to="/admin"><i className="lni lni-home"></i> Home</Link></li>
                                        <li>Categories</li>
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
                                            <Link to="/admin/createcategories"><i className="lni lni-plus"></i> Add Category</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-list-title">
                                    <div className="row">
                                        <div className="col-lg-1 col-md-3 col-12">
                                            <p> No.</p>
                                        </div>
                                        <div className="col-lg-3 col-md-1 col-12">
                                            <p>Category Name</p>
                                        </div>
                                        <div className="col-lg-4 col-md-3 col-12">
                                            <p>Description</p>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-12">
                                            <p>Created By</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12">
                                            <p>Created At</p>
                                        </div>
                                    </div>
                                </div>

                                {
                                    categories.map(({ id, category }, index) => (
                                        <CategoryCard key={id} index={index} category={category} />
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

export default CategoryList
