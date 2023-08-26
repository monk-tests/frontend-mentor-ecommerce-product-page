import Content from './Content'
import Pictures from './Pictures'
import './Main.css'

const Main = ({
    controlItemsCount,
    itemCount,
    toggleModal,
    product,
    addItemToCart,
}) => {
    return (
        <main>
            <Pictures toggleModal={toggleModal} />
            <Content
                controlItemsCount={controlItemsCount}
                itemCount={itemCount}
                product={product}
                addItemToCart={addItemToCart}
            />
        </main>
    )
}
export default Main
