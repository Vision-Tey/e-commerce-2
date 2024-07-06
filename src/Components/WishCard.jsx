import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';

function WishCard({ wish }) {
    const [{ wishlist }, dispatch] = useStateValue();
    console.log(wishlist);

    const removeFromWishList = () => {
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            id: wish.id
        })
    }
    return (
        <>
            <div className="cart-single-list">
                <div className="row align-items-center">
                    <div className="col-lg-1 col-md-1 col-12">
                        <Link to="/"><img src={wish.image} alt="#" /></Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12">
                        <h5 className="product-name"><Link
                            to="/"
                        >
                            {wish.name}</Link></h5>
                        <p className="product-des">
                            <span><em>Type:</em> {wish.category}</span>
                            <span><em>Color:</em> Black</span>
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <div className="count-input">
                            <select className="form-control">
                                <option value={wish.quantity}>{wish.quantity}</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p>{wish.originalPrice.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 2,
                        })}
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p>{((wish.originalPrice * wish.quantity) - (wish.price * wish.quantity)).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 2,
                        })}</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p>{(wish.originalPrice * wish.quantity).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 2,
                        })}</p>
                    </div>
                    <div className="col-lg-1 col-md-2 col-12">
                        <button className="remove-item" onClick={removeFromWishList}><i className="lni lni-close"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishCard
