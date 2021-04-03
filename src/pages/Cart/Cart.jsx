import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ButtonTemplate from '../../components/Elements/Button/ButtonTemplate';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <div>
            <h2>
                Cart
            </h2>
            <ul>
                {
                    cartItems.map(item => (
                        <li key={item.id}>
                            { item.title }
                        </li>
                    ))
                }
            </ul>
            <div>
                {
                    !cartItems.length ?
                        <div> Ваша корзина пустая </div>
                        : <div> Total: { cartItems.length } </div>
                }
            </div>
            <Link to={'/'}>
                <ButtonTemplate buttonText={'Go HomePage'}/>
            </Link>
        </div>
    )
}

export default Cart;
