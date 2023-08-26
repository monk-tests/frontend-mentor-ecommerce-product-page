// import cartIcon from '/images/icon-cart.svg'
import { ReactComponent as CartIcon } from '../assets/icon-cart.svg'
import itemIcon from '/images/image-product-1-thumbnail.jpg'
import deleteIcon from '../assets/icon-delete.svg'

import './Cart.css'
import { useState } from 'react'

const Cart = ({ cartItems, deleteItemsFromCart }) => {
    const darkColor = 'hsl(220, 13%, 13%)'
    const normalColor = 'hsl(219 9%, 45%)'
    const [cartOpen, setCartOpen] = useState(false)
    const totalNumberOfItemsInCart = () => {
        let totalItems = 0
        cartItems.forEach((i) => {
            totalItems += i.quantity
        })
        return totalItems
    }

    return (
        <li className="cart">
            <div className="cart-icon-container">
                {/* <img src={cartIcon} alt="cart-icon" className="cart-icon" /> */}
                <CartIcon
                    className="cart-icon"
                    fill={cartOpen ? darkColor : normalColor}
                    onClick={() => setCartOpen(!cartOpen)}
                />
                {cartItems.length === 0 ? (
                    ''
                ) : (
                    <div className="cart-item-count">
                        {totalNumberOfItemsInCart()}
                    </div>
                )}
            </div>
            <div className={`cart-modal ${cartOpen ? 'active' : 'inactive'}`}>
                <h3>cart</h3>
                <div className="cart-items">
                    {cartItems.length === 0 ? <p>Your cart is empty</p> : ''}
                    <ul className="items">
                        {cartItems.map((i) => {
                            const {
                                id,
                                imgThumbnail,
                                productName,
                                price,
                                quantity,
                            } = i
                            return (
                                <li className="item" key={id}>
                                    <img
                                        src={imgThumbnail}
                                        alt={productName}
                                        className="item-icon"
                                    />
                                    <div className="item-details">
                                        <h3>{productName}</h3>
                                        <div className="cart-price-container">
                                            <p className="price-cart">
                                                ${price.toFixed(2)}
                                            </p>
                                            <span>x</span>
                                            <p className="quantity">
                                                {quantity}
                                            </p>
                                            <p className="total-price">
                                                ${(price * quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="delete-button"
                                        onClick={() => deleteItemsFromCart(id)}
                                    >
                                        {' '}
                                        <img
                                            src={deleteIcon}
                                            alt="delete button"
                                        />
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                    {cartItems.length === 0 ? (
                        ''
                    ) : (
                        <button className="checkout-btn">Checkout</button>
                    )}
                </div>
            </div>
        </li>
    )
}
export default Cart
