// import Reactcom
import { ReactComponent as IconMinus } from '../assets/icon-minus.svg'
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg'
import { ReactComponent as IconCart } from '../assets/icon-cart.svg'

import './Func.css'

const Func = ({ controlItemsCount, itemCount, addItemToCart, product }) => {
    return (
        <div className="main-container" onClick={(e) => controlItemsCount(e)}>
            <div className="item-count-container">
                <div className="icon-container icon-m-c">
                    <IconMinus className="icon-minus" />
                </div>
                <p className="item-count">{itemCount}</p>
                <div className="icon-container icon-p-c">
                    <IconPlus className="icon-plus" />
                </div>
            </div>
            <button
                className="add-to-cart"
                onClick={() => addItemToCart(product)}
            >
                <IconCart
                    className="add-btn-cart-icon"
                    fill="hsl(25, 100%, 94%)"
                />
                Add to cart
            </button>
        </div>
    )
}
export default Func
