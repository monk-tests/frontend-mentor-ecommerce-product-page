import profileIcon from '/images/image-avatar.png'
import menuIcon from '../assets/icon-menu.svg'
import logo from '../assets/logo.svg'
import './header.css'
import Cart from './Cart'
import { ReactComponent as IconClose } from '../assets/icon-close.svg'

const Header = ({
    cartItems,
    deleteItemsFromCart,
    controlItemsCount,
    navOpen,
    setNavOpen,
}) => {
    return (
        <header>
            <img
                src={menuIcon}
                alt=""
                className="menu-icon"
                onClick={() => setNavOpen(true)}
            />
            <img src={logo} alt="sneakers logo" className="logo" />

            <nav>
                <div
                    className={`navigation-container ${
                        navOpen ? 'active' : ''
                    }`}
                >
                    <ul className="navigation">
                        <li className="icon-close-li">
                            <div
                                className="icon-close-container"
                                onClick={() => setNavOpen(false)}
                            >
                                <IconClose className="icon-close-phone" />
                            </div>
                        </li>
                        <li className="nav-options">Collections</li>
                        <li className="nav-options">Men</li>
                        <li className="nav-options">Women</li>
                        <li className="nav-options">About</li>
                        <li className="nav-options">Contact</li>
                    </ul>
                </div>
                <ul className="ul-two">
                    <Cart
                        className="nav-cart"
                        cartItems={cartItems}
                        deleteItemsFromCart={deleteItemsFromCart}
                    />
                    <li className="user-icon-container">
                        <img
                            src={profileIcon}
                            alt="user icon"
                            className="user-icon"
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
