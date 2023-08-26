import Func from './Func'
import './Content.css'

const Content = ({ controlItemsCount, itemCount, product, addItemToCart }) => {
    const {
        companyName,
        productName,
        description,
        price,
        originalPrice,
        discount,
    } = product
    return (
        <div className="content-container">
            <h3 className="company-name">{companyName}</h3>
            <h2 className="product-name">{productName}</h2>
            <p className="product-description"> {description}</p>
            <div className="price-container">
                <div>
                    <p className="price">${price.toFixed(2)}</p>
                    <p className="discount">{discount}%</p>
                </div>
                <p className="original-price">${originalPrice.toFixed(2)}</p>
            </div>
            <Func
                className="func"
                product={product}
                controlItemsCount={controlItemsCount}
                itemCount={itemCount}
                addItemToCart={addItemToCart}
            />
        </div>
    )
}
export default Content
