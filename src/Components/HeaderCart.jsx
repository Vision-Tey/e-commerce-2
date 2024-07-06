import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider';

function HeaderCart({ item }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);

    //removeFromBascket
    const removeFromBascket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: item.id
        })
    }
    return (
        <>
            <li>
                <button className="remove" onClick={removeFromBascket}><i
                    className="lni lni-close"></i></button>
                <div className="cart-img-head">
                    <Link className="cart-img" to="/"><img
                        src={item.image} alt="#" /></Link>
                </div>

                <div className="content">
                    <h4><Link
                        to={{
                            pathname: `/product/${item.id}`,
                            state: item,
                        }}
                    >
                        {
                            item.name
                        }</Link></h4>
                    <p className="quantity">{item.quantity} - <span className="amount">
                        {
                            item.price.toLocaleString('en-US', {
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

export default HeaderCart
