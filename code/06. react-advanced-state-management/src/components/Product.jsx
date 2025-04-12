// **************************************************
// A-01: This version of Product.jsx accepted product and addToBasket as props and displayed individual product details. A button was included to add the product to the cart by calling addToBasket with the product ID.
// **************************************************
// const Product = ({ product, addToBasket }) => {
//     return (
//         <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.title} className="product-image" />

//             <div className="product-info">
//                 <h3 className="product-title">{product.title}</h3>
//                 <p className="product-description">{product.description}</p>
//                 <p className="product-price">Price: ${product.price}</p>
//             </div>

//             <div className='product-actions'>
//                 <button onClick={() => addToBasket({ productId: product.id })}>Add To Basket</button>
//             </div>
//         </div>
//     )
// }

// export default Product;
// **************************************************

// **************************************************
// B-01: The updated version of Product.jsx used useContext to consume the CartContext instead of passing addToBasket directly as a prop. This refactor made the Product component simpler and allowed it to interact directly with the global cart state.
// **************************************************
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

const Product = ({ product }) => {

    const { addToBasket } = useContext(CartContext);

    return (
        <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />

            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
            </div>

            <div className='product-actions'>
                <button onClick={() => addToBasket({ productId: product.id })}>Add To Basket</button>
            </div>
        </div>
    )
}

export default Product;
// **************************************************