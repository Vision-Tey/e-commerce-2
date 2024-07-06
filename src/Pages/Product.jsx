import React, { useEffect, useState } from 'react'
import './Product.css'
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import product1 from '../assets/images/product-details/01.jpg'
import product2 from '../assets/images/product-details/02.jpg'
import product3 from '../assets/images/product-details/03.jpg'
import product4 from '../assets/images/product-details/04.jpg'
import product5 from '../assets/images/product-details/05.jpg'
import { useStateValue } from '../Context/StateProvider'
import { Link, useLocation, useParams } from "react-router-dom";

function Product() {
    const [{ basket, wishlist }, dispatch] = useStateValue();
    const { id } = useParams();
    let productPrice = 0;
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    let basketItem = [];
    let wishlistItem = [];

      // Fetch product data from Firebase
      useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
            const productData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })).find(item => item.id === id);
            setProduct(productData);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [id]);
    //set quantity
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

        // Check if product is null or undefined
        if (!product) {
            return (
                <div className="container">
                    <h2>Product not found</h2>
                    <Link to="/products">
                        <button className="btn"><i className="lni lni-reload"></i> Back To Shop</button>
                    </Link>
                </div>
            );
        }
    product.discount === 0 ? (
        productPrice = product.price
    ) : (
        productPrice = (product.price - (product.price * product.discount / 100))
    )
    const addToBasket = () => {
        //add item to the basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                name: product.name,
                image: product.image,
                description: product.description,
                price: productPrice,
                originalPrice: product.price,
                rating: product.rating,
                discount: product.discount,
                quantity: parseInt(quantity),
                color: 'black',
                category: product.category
            }
        })
    }

    //add item to the wishlist
    const addToWishlist = () => {
        //add item to the wishlist
        console.log('add to wishlist');
        dispatch({
            type: 'ADD_TO_WISHLIST',
            wish: {
                id: id,
                name: product.name,
                image: product.image,
                description: product.description,
                price: productPrice,
                originalPrice: product.price,
                rating: product.rating,
                discount: product.discount,
                quantity: parseInt(quantity),
                color: 'black',
                category: product.category
            }
        })
    }

    basketItem = basket.filter(item => item.id === id);
    wishlistItem = wishlist.filter(item => item.id === id);

    const removeFromWishList = () => {
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            id: id
        })
    }

    const removeFromBascket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <>
            {/* <!-- Start Breadcrumbs --> */}
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Single Product</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><Link to="index.html"><i className="lni lni-home"></i> Home</Link></li>
                                <li><Link to="index.html">Shop</Link></li>
                                <li>Single Product</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Breadcrumbs --> */}

            {/* <!-- Start Item Details --> */}
            <section className="item-details section">
                <div className="container">
                    <div className="top-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-images">
                                    <main id="gallery">
                                        <div className="main-img">
                                            <img src={product.image} id="current" alt="#" />
                                        </div>
                                        <div className="images">
                                            <img src={product1} className="img" alt="#" />
                                            <img src={product2} className="img" alt="#" />
                                            <img src={product3} className="img" alt="#" />
                                            <img src={product4} className="img" alt="#" />
                                            <img src={product5} className="img" alt="#" />
                                        </div>
                                    </main>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-info">
                                    <h2 className="title">{product.name}</h2>
                                    <p className="category"><i className="lni lni-tag"></i><Link to="/">{product.category}</Link></p>
                                    {
                                        product.discount === 0 ? (
                                            <h3 className="price">
                                                {
                                                    product.price.toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'USD',
                                                        maximumFractionDigits: 2,
                                                    })
                                                }
                                            </h3>
                                        ) :
                                            (
                                                <h3 className="price">
                                                   $ {
                                                        (product.price - (product.price * product.discount / 100)).toLocaleString('en-US', {
                                                            style: 'currency',
                                                            currency: 'USD',
                                                            maximumFractionDigits: 2,
                                                        })
                                                    }
                                                    <span>
                                                        {
                                                            product.price.toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 2,
                                                            })
                                                        }
                                                    </span>
                                                </h3>
                                            )
                                    }
                                    <p className="info-text">{product.description}</p>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group color-option">
                                                <p className="title-label">Choose color</p>
                                                <div className="single-checkbox checkbox-style-1">
                                                    <input type="checkbox" id="checkbox-1" />
                                                    <label htmlFor="checkbox-1"><span></span></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-2">
                                                    <input type="checkbox" id="checkbox-2" />
                                                    <label htmlFor="checkbox-2"><span></span></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-3">
                                                    <input type="checkbox" id="checkbox-3" />
                                                    <label htmlFor="checkbox-3"><span></span></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-4">
                                                    <input type="checkbox" id="checkbox-4" />
                                                    <label htmlFor="checkbox-4"><span></span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group">
                                                <label htmlFor="capacity">Battery capacity</label>
                                                <select className="form-control" id="capacity">
                                                    <option>5100 mAh</option>
                                                    <option>6200 mAh</option>
                                                    <option>8000 mAh</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group quantity">
                                                <label htmlFor="quantity">Quantity</label>
                                                <select className="form-control" id="quantity" onChange={handleQuantity}>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                    <option value={9}>9</option>
                                                    <option value={10}>10</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <div className="row align-items-end">
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="button cart-button">
                                                    {
                                                        basketItem?.length !== 0 ? (
                                                            <button className="btn btn-remove" style={{ width: `100%` }} onClick={removeFromBascket} >Remove From Cart</button>
                                                        ) : (
                                                            <button className="btn" style={{ width: `100%` }} onClick={addToBasket} >Add to Cart</button>
                                                        )
                                                    }

                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <Link to="/products">
                                                        <button className="btn"><i className="lni lni-reload"></i> Back To Shop</button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    {
                                                        wishlistItem?.length !== 0 ? (
                                                            <button className="btn btn-remove" onClick={removeFromWishList}> Remove Wish</button>
                                                        ) : (
                                                            <button className="btn" onClick={addToWishlist}> Add To Wishlist</button>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Item Details --> */}
        </>
    )
}

export default Product
