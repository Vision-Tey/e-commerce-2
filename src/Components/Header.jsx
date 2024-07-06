import React from 'react'
import './Header.css'
import headerLogo from '../assets/images/logo.svg'
import { useStateValue } from '../Context/StateProvider'
import { Link } from 'react-router-dom';
import HeaderCart from './HeaderCart';
import { auth } from '../firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import HeaderWish from './HeaderWish';

function Header() {
    const navigate = useNavigate()
    const [{ basket, user, wishlist }, dispatch] = useStateValue();
    let totalPrice = 0;
    let totalwish = 0;
    for (let i = 0; i < basket?.length; i++) {
        totalPrice += (basket[i].price * basket[i].quantity);
    }
    for (let i = 0; i < wishlist?.length; i++) {
        totalwish += (wishlist[i].price * wishlist[i].quantity);
    }
    const logout = () => {
        if (user) {
            signOut(auth)
                .then(() => {
                    // Redirect to homepage
                    dispatch({
                        type: 'SET_USER',
                        user: null
                    })
                    navigate('/');
                })
                .catch((error) => {
                    console.error('Error signing out:', error);
                });
        }
    }
    
    return (
        <>
            {/* <!-- Start Header Area --> */}
            <header className="header navbar-area">
                {/* <!-- Start Topbar --> */}
                <div className="topbar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-left">
                                    LOGO
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-middle">
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-end">
                                    {
                                        user ? (
                                            <div className="user">
                                                <i className="lni lni-user"></i>
                                                {
                                                    user?.displayName
                                                }
                                            </div>
                                        ) : (
                                            ''
                                        )
                                    }
                                    <ul className="user-login">
                                        {
                                            user ? (
                                                <li>
                                                    <p className="signout" onClick={logout}>Sign Out</p>
                                                </li>
                                            ) : (
                                                <li>
                                                    <Link to="/login">Sign In</Link>
                                                </li>
                                            )
                                        }
                                        {
                                            user ? ('') : (
                                                <li>
                                                    <Link to="/register">Register</Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Topbar --> */}
                {/* <!-- Start Header Middle --> */}
                <div className="header-middle">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-7">
                                {/* <!-- Start Header Logo --> */}
                                <Link className="navbar-brand" to="/">
                                    <img src={headerLogo} alt="Logo" />
                                </Link>
                                {/* <!-- End Header Logo --> */}
                            </div>
                            <div className="col-lg-5 col-md-7 d-xs-none">

                                         {/* <!-- Start Navbar --> */}
                                <nav className="navbar navbar-expand-lg">
                                    <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <Link to="/" className="active" aria-label="Toggle navigation">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="dd-menu collapsed" to="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Account</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-2">
                                                    {
                                                        user ? (
                                                            <>
                                                                <li className="nav-item"><Link to="/">My Account</Link></li>
                                                                <li className="nav-item"><Link to="/">Inbox</Link></li>
                                                                <li className="nav-item"><Link to="/orders">Orders</Link></li>
                                                                <li className="nav-item"><Link to="/">Credit Details</Link></li>
                                                                <li className="nav-item"><Link to="/">Saved Items</Link></li>
                                                                <li className="nav-item logout-link" onClick={logout}>Logout</li>
                                                            </>
                                                        ) :
                                                            (
                                                                <li className="nav-item"><Link to="/login">Login</Link></li>
                                                            )
                                                    }
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="dd-menu collapsed" to="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Shop</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-3">
                                                    <li className="nav-item"><Link to="/products">Products</Link></li>
                                                    <li className="nav-item"><Link to="/wishlist">Wish List</Link></li>
                                                    <li className="nav-item"><Link to="/cart">Cart</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="dd-menu collapsed" to="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Help</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-4">
                                                    <li className="nav-item"><Link to="/">Help Center</Link></li>
                                                    <li className="nav-item"><Link to="/">Place & Track Order</Link></li>
                                                    <li className="nav-item"><Link to="/">Order Cancellation</Link></li>
                                                    <li className="nav-item"><Link to="/">Payment</Link></li>
                                                    <li className="nav-item"><Link to="/">Returns and Refunds</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" aria-label="Toggle navigation">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- navbar collapse --> */}
                                </nav>
                                {/* <!-- End Navbar --> */}


                            </div>
                            <div className="col-lg-4 col-md-2 col-5">
                                <div className="middle-right-area">
                                    <div className="nav-hotline">
                                       
                                    </div>
                                    <div className="navbar-cart">
                                        <div className="cart-items cart-wish">
                                            <Link to="/" className="main-btn">
                                                <i className="lni lni-heart"></i>
                                                <span className="total-items">{wishlist?.length}</span>
                                            </Link>
                                            {/* <!-- Shopping Item --> */}
                                            <div className="shopping-item">
                                                <div className="dropdown-cart-header">
                                                    <span>{wishlist?.length} Item(s)</span>
                                                    <Link to="/wishlist">View Wish List</Link>
                                                </div>
                                                <ul className="shopping-list">
                                                    {
                                                        wishlist?.length === 0 ? (
                                                            <li>Your Wish List is Empty</li>
                                                        ) : (
                                                            wishlist.map((item, index) => (
                                                                <HeaderWish wish={item} key={index} />
                                                            ))
                                                        )

                                                    }
                                                </ul>
                                                <div className="bottom">
                                                    <div className="total">
                                                        <span>Total</span>
                                                        <span className="total-amount">{
                                                            (totalwish).toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 2,
                                                            })
                                                        }</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--/ End Shopping Item --> */}
                                        </div>

                                        <div className="cart-items">
                                            <Link to="/" className="main-btn">
                                                <i className="lni lni-cart"></i>
                                                <span className="total-items">{basket?.length}</span>
                                            </Link>
                                            {/* <!-- Shopping Item --> */}
                                            <div className="shopping-item">
                                                <div className="dropdown-cart-header">
                                                    <span>{basket?.length} Item(s)</span>
                                                    <Link to="/cart">View Cart</Link>
                                                </div>
                                                <ul className="shopping-list">
                                                    {
                                                        basket?.length === 0 ? (
                                                            <li>Your Cart is Empty</li>
                                                        ) : (
                                                            basket.map((item, index) => (
                                                                <HeaderCart item={item} key={index} />
                                                            ))
                                                        )

                                                    }
                                                </ul>
                                                <div className="bottom">
                                                    <div className="total">
                                                        <span>Total</span>
                                                        <span className="total-amount">{
                                                            (totalPrice).toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 2,
                                                            })
                                                        }</span>
                                                    </div>
                                                    <div className="button">
                                                        {
                                                            user ? (
                                                                <Link to="/checkout" className="btn animate">Checkout</Link>
                                                            ) : (
                                                                <Link to="/login" className="btn animage">Login to Checkout</Link>
                                                            )
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--/ End Shopping Item --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Header Middle --> */}
            </header>
            {/* <!-- End Header Area --> */}
        </>
    )
}

export default Header
