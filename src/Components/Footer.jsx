import React from 'react'
import './Footer.css'
import footerLogo from '../assets/images/logo.svg'
import creditCards from '../assets/images/footer/credit-cards-footer.png'

function Footer() {
    return (
        <>
            {/* <!-- Start Footer Area --> */}
            <footer className="footer site-footer">
                
                {/* <!-- Start Footer Bottom --> */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-12">
                                    <div className="payment-gateway">
                                        <span>We Accept:</span>
                                        <img
                                            src={creditCards}
                                            alt="#"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="copyright">
                                        <p>

                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <ul className="socila">
                                        <li>
                                            <span>Follow Us On:</span>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-facebook-filled"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-twitter-original"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-google"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Bottom --> */}
            </footer>
            {/* <!--/ End Footer Area --> */}

            {/* <!-- ========================= scroll-top ========================= --> */}
            <a href="/#" className="scroll-top">
                <i className="lni lni-chevron-up"></i>
            </a>
        </>
    )
}

export default Footer
