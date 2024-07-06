import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider';

function CartProduct({ item }) {
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
            <div className="cart-single-list">
                <div className="row align-items-center">
                    <div className="col-lg-1 col-md-1 col-12">
                        <Link to="/"><img src={item.image} alt="#" /></Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12">
                        <h5 className="product-name"><Link
                            to="/"
                        >
                            {item.name}</Link></h5>
                        <p className="product-des">
                            <span><em>Type:</em> {item.category}</span>
                            <span><em>Color:</em> Black</span>
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p className="product-price">{item.quantity.toFixed(2)}</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p>{item.originalPrice.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 2,
                        })}
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p>{(
                            (parseFloat(item.originalPrice) * parseFloat(item.quantity)) -
                            (parseFloat(item.price) * parseFloat(item.quantity))
                        ).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 2,
                        })}</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p>{(
                            parseFloat(item.originalPrice) * parseFloat(item.quantity)
                        ).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 2,
                        })}</p>
                    </div>

                    <div className="col-lg-1 col-md-2 col-12">
                        <button className="remove-item" onClick={removeFromBascket}><i className="lni lni-close"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProduct
