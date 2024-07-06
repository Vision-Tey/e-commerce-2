import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider';

function HeaderWish({ wish }) {
    const [{ wishlist }, dispatch] = useStateValue();
    console.log(wishlist)
    const removeFromWishList = () => {
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            id: wish.id
        })
    }

    return (
        <>
            <li>
                <button className="remove" onClick={removeFromWishList}><i
                    className="lni lni-close"></i></button>
                <div className="cart-img-head">
                    <Link className="cart-img" to="/"><img
                        src={wish.image} alt="#" /></Link>
                </div>

                <div className="content">
                    <h4><Link
                        to={{
                            pathname: `/product/${wish.id}`,
                            state: wish,
                        }}
                    >
                        {
                            wish.name
                        }</Link></h4>
                    <p className="quantity">{wish.quantity} - <span className="amount">
                        {
                            wish.price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                maximumFractionDigits: 2,
                            })
                        }
                    </span></p>
                </div>
            </li>

        </>
    )
}

export default HeaderWish
