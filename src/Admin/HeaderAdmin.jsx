import React from 'react'
import '../Components/Header.css'
import { useStateValue } from '../Context/StateProvider'
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import './HeaderAdmin.css';

function HeaderAdmin() {
    const navigate = useNavigate()
    const [{ admin }] = useStateValue();

    const logout = () => {
        if (admin) {
            auth.signOut();
            navigate.push('/admin/login')
        }
    }

    return (
        <>
            {/* <!-- Start Header Area --> */}
            <header className="header navbar-area admin-header">
                {/* <!-- Start Topbar --> */}
                <div className="topbar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-left">
                                    <ul className="menu-top-link">
                                        <li>
                                            <div className="select-position">
                                                <select id="select4">
                                                    <option value="UGX">UGX UGSHS</option>
                                                    <option value="USD">$ USD</option>
                                                    <option value="EURO">€ EURO</option>
                                                    <option value="CAD">$ CAD</option>
                                                    <option value="INR">₹ INR</option>
                                                    <option value="CNY">¥ CNY</option>
                                                    <option value="BDT">৳ BDT</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="select-position">
                                                <select id="select5">
                                                    <option value="0">English</option>
                                                    <option value="1">Español</option>
                                                    <option value="2">Filipino</option>
                                                    <option value="3">Français</option>
                                                    <option value="4">العربية</option>
                                                    <option value="5">हिन्दी</option>
                                                    <option value="6">বাংলা</option>
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-middle">
                                    <ul className="useful-links">
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-end">
                                    {
                                        admin ? (
                                            <div className="user">
                                                <i className="lni lni-user"></i>
                                                {
                                                    admin?.displayName
                                                }
                                            </div>
                                        ) : (
                                            ''
                                        )
                                    }
                                    <ul className="user-login">
                                        {
                                            admin ? (
                                                <li>
                                                    <p className="signout" onClick={logout}>Sign Out</p>
                                                </li>
                                            ) : (
                                                <li>
                                                    <Link to="/admin/login">Sign In</Link>
                                                </li>
                                            )
                                        }
                                        {
                                            admin ? ('') : (
                                                <li>
                                                    <Link to="/admin/register">Register</Link>
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

                {/* <!-- Start Header Bottom --> */}
                {
                    admin ? (
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-6 col-12">
                                    <div className="nav-inner">
                                        {/* <!-- Start Mega Category Menu --> */}
                                        <div className="mega-category-menu">
                                            <span className="cat-button"><i className="lni lni-menu"></i> All Categories</span>
                                            <ul className="sub-category">
                                                <li><Link to="/admin">Electronics <i className="lni lni-chevron-right"></i></Link>
                                                    <ul className="inner-sub-category">
                                                        <li><Link to="/admin">Digital Cameras</Link></li>
                                                        <li><Link to="/admin">Camcorders</Link></li>
                                                        <li><Link to="/admin">Camera Drones</Link></li>
                                                        <li><Link to="/admin">Smart Watches</Link></li>
                                                        <li><Link to="/admin">Headphones</Link></li>
                                                        <li><Link to="/admin">MP3 Players</Link></li>
                                                        <li><Link to="/admin">Microphones</Link></li>
                                                        <li><Link to="/admin">Chargers</Link></li>
                                                        <li><Link to="/admin">Batteries</Link></li>
                                                        <li><Link to="/admin">Cables & Adapters</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/admin">accessories</Link></li>
                                                <li><Link to="/admin">Televisions</Link></li>
                                                <li><Link to="/admin">best selling</Link></li>
                                                <li><Link to="/admin">top 100 offer</Link></li>
                                                <li><Link to="/admin">sunglass</Link></li>
                                                <li><Link to="/admin">watch</Link></li>
                                                <li><Link to="/admin">man’s product</Link></li>
                                                <li><Link to="/admin">Home Audio & Theater</Link></li>
                                                <li><Link to="/admin">Computers & Tablets </Link></li>
                                                <li><Link to="/admin">Video Games </Link></li>
                                                <li><Link to="/admin">Home Appliances </Link></li>
                                            </ul>
                                        </div>
                                        {/* <!-- End Mega Category Menu --> */}
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
                                                        <Link to="/admin" className="active" aria-label="Toggle navigation">Home</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="dd-menu collapsed" to="/admin" data-bs-toggle="collapse"
                                                            data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                                            aria-expanded="false" aria-label="Toggle navigation">Account</Link>
                                                        <ul className="sub-menu collapse" id="submenu-1-2">
                                                            <li className="nav-item"><Link to="/admin">My Account</Link></li>
                                                            <li className="nav-item"><Link to="/admin">Inbox</Link></li>
                                                            <li className="nav-item"><Link to="/admin">Orders</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="dd-menu collapsed" to="/admin" data-bs-toggle="collapse"
                                                            data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent"
                                                            aria-expanded="false" aria-label="Toggle navigation">Admin</Link>
                                                        <ul className="sub-menu collapse" id="submenu-1-3">
                                                            <li className="nav-item"><Link to="/admin/products">Products</Link></li>
                                                            <li className="nav-item"><Link to="/admin/categories">Categories</Link></li>
                                                            <li className="nav-item"><Link to="/admin/orders">Orders</Link></li>
                                                            <li className="nav-item"><Link to="/admin">Users</Link></li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                            </div>
                                            {/* <!-- navbar collapse --> */}
                                        </nav>
                                        {/* <!-- End Navbar --> */}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/* <!-- Start Nav Social --> */}
                                    <div className="nav-social">
                                        <h5 className="title">Follow Us:</h5>
                                        <ul>
                                            <li>
                                                <Link to="/admin"><i className="lni lni-facebook-filled"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="/admin"><i className="lni lni-twitter-original"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="/admin"><i className="lni lni-instagram"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="/admin"><i className="lni lni-skype"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Nav Social --> */}
                                </div>
                            </div>
                        </div>

                    ) : ('')
                }
                {/* <!-- End Header Bottom --> */}
            </header>
            {/* <!-- End Header Area --> */}
        </>
    )

}

export default HeaderAdmin
