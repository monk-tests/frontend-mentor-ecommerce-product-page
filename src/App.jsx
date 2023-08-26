import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import PictureModal from './components/PictureModal'
import productImg from '/images/image-product-1.jpg'
import productImgThumbnail from '/images/image-product-1-thumbnail.jpg'

function App() {
    const [itemCount, setItemCount] = useState(0)
    const [modalActive, setModalActive] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [navOpen, setNavOpen] = useState(false)
    // const toggleNav = (val) => {
    //     setNavOpen(!navOpen)
    // }
    const deleteItemsFromCart = (id) => {
        setCartItems((items) => {
            return items.filter((item) => item.id !== id)
        })
    }
    const product = {
        img: productImg,
        imgThumbnail: productImgThumbnail,
        companyName: 'sneaker company',
        productName: 'Fall limited edition sneakers',
        description: `These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they'll
        withstand everything the weather can offer.`,
        price: 125,
        originalPrice: 250,
        discount: 50,
    }
    const toggleModal = () => {
        setModalActive(!modalActive)
    }

    const controlItemsCount = (e) => {
        if (e.target.closest('.icon-m-c')) {
            if (itemCount === 0) return
            setItemCount((count) => count - 1)
            return
        }
        if (e.target.closest('.icon-p-c')) {
            setItemCount((count) => count + 1)
            return
        }
    }

    const addItemToCart = (product) => {
        console.log('hi')
        if (itemCount === 0) return
        let itemAdded = false

        cartItems.forEach((prod) => {
            let newItems
            if (prod.productName === product.productName) {
                newItems = cartItems.map((p) => {
                    if (p.productName === product.productName)
                        return {
                            ...prod,
                            quantity: prod.quantity + itemCount,
                        }
                })
            }
            setCartItems(newItems)
            itemAdded = true
        })

        if (itemAdded) return

        const item = {
            ...product,
            quantity: itemCount,
        }
        setCartItems((items) => {
            return [...items, { id: Math.random(), ...item }]
        })
    }

    return (
        <div className={`container ${navOpen ? 'nav-open' : ''}`}>
            <Header
                cartItems={cartItems}
                deleteItemsFromCart={deleteItemsFromCart}
                navOpen={navOpen}
                setNavOpen={setNavOpen}
            />
            <Main
                controlItemsCount={controlItemsCount}
                itemCount={itemCount}
                toggleModal={toggleModal}
                product={product}
                addItemToCart={addItemToCart}
            />
            {modalActive ? <PictureModal toggleModal={toggleModal} /> : ''}
        </div>
    )
}

export default App
