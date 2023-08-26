import productImg1 from '/images/image-product-1.jpg'
import productImg2 from '/images/image-product-2.jpg'
import productImg3 from '/images/image-product-3.jpg'
import productImg4 from '/images/image-product-4.jpg'

import productThumbnail1 from '/images/image-product-1-thumbnail.jpg'
import productThumbnail2 from '/images/image-product-2-thumbnail.jpg'
import productThumbnail3 from '/images/image-product-3-thumbnail.jpg'
import productThumbnail4 from '/images/image-product-4-thumbnail.jpg'

import { ReactComponent as IconClose } from '../assets/icon-close.svg'
import { ReactComponent as IconPrev } from '../assets/icon-previous.svg'
import { ReactComponent as IconNext } from '../assets/icon-next.svg'

import './PictureModal.css'
import { useState } from 'react'

const imgs = [productImg1, productImg2, productImg3, productImg4]
const imgThumbnails = [
    productThumbnail1,
    productThumbnail2,
    productThumbnail3,
    productThumbnail4,
]
console.log(window.innerWidth)
const PictureModal = ({ toggleModal }) => {
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
    // console.log(imgs.length)
    return (
        <div className="modal-pictures-container">
            <div className="modal-slider-controls">
                <IconClose className="icon-close" onClick={toggleModal} />
                <button className="modal-prev" onClick={prevImg}>
                    <IconPrev className="icon-prev" />
                </button>
                <button className="modal-next" onClick={nextImg}>
                    <IconNext className="icon-next" />
                </button>
                <div className="modal-slider-main">
                    {imgs.map((img, i) => {
                        // console.log(i, currentImg)
                        return (
                            <img
                                key={i}
                                src={img}
                                alt="product image"
                                className="modal-product-image img-1"
                                data-id="1"
                                style={{
                                    transform: `translateX(${
                                        -100 * currentImg
                                    }%)`,
                                    // opacity: personIndex === currentPerson ? 1 : 0,
                                }}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="modal-product-img-thumbnails">
                {imgThumbnails.map((img, i) => {
                    return (
                        <div
                            key={i}
                            className={`modal-product-thumbnail-container ${
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
export default PictureModal
