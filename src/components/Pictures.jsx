import productImg1 from '/images/image-product-1.jpg'
import productImg2 from '/images/image-product-2.jpg'
import productImg3 from '/images/image-product-3.jpg'
import productImg4 from '/images/image-product-4.jpg'

import productThumbnail1 from '/images/image-product-1-thumbnail.jpg'
import productThumbnail2 from '/images/image-product-2-thumbnail.jpg'
import productThumbnail3 from '/images/image-product-3-thumbnail.jpg'
import productThumbnail4 from '/images/image-product-4-thumbnail.jpg'

import { ReactComponent as IconPrev } from '../assets/icon-previous.svg'
import { ReactComponent as IconNext } from '../assets/icon-next.svg'

import './Pictures.css'
import { useState } from 'react'

const imgs = [productImg1, productImg2, productImg3, productImg4]
const imgThumbnails = [
    productThumbnail1,
    productThumbnail2,
    productThumbnail3,
    productThumbnail4,
]

const Pictures = ({ toggleModal }) => {
    const [currentImg, setCurrentImg] = useState(0)
    const changeCurrentImg = (id) => {
        setCurrentImg(id)
    }
    const nextImg = () => {
        if (currentImg + 1 > imgs.length - 1) {
            setCurrentImg(0)
            return
        }
        setCurrentImg(currentImg + 1)
    }
    const prevImg = () => {
        if (currentImg - 1 < 0) {
            setCurrentImg(imgs.length - 1)
            return
        }
        setCurrentImg(currentImg - 1)
    }
    return (
        <div className="pictures-container">
            <div
                className="slider-main"
                onClick={() => {
                    if (window.innerWidth < 1000) return
                    console.log(window.innerWidth)
                    toggleModal()
                }}
            >
                <button className="prev" onClick={prevImg}>
                    <IconPrev className="icon-prev" />
                </button>
                <button className="next" onClick={nextImg}>
                    <IconNext className="icon-next" />
                </button>
                {imgs.map((img, i) => {
                    // console.log(i, currentImg)
                    return (
                        <img
                            key={i}
                            src={img}
                            alt="product image"
                            className="product-image img-1"
                            data-id="1"
                            style={{
                                transform: `translateX(${-100 * currentImg}%)`,
                                // opacity: personIndex === currentPerson ? 1 : 0,
                            }}
                        />
                    )
                })}
            </div>
            <div className="product-img-thumbnails">
                {imgThumbnails.map((img, i) => {
                    return (
                        <div
                            key={i}
                            className={`product-thumbnail-container ${
                                currentImg === i ? 'active' : ''
                            }`}
                            onClick={() => changeCurrentImg(i)}
                        >
                            <img src={img} alt="product-thumbnail-1" id="1" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Pictures
