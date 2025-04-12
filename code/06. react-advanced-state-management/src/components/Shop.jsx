// **************************************************
// A-01: initially mapped over a static array (DUMMY_PRODUCTS) and rendered each product using the Product component. addToBasket was passed down as a prop to each product for adding items to the cart.
// **************************************************
// import Product from './Product.jsx';
// import { DUMMY_PRODUCTS } from '../dummy-products.js'

// const Shop = ({ addToBasket }) => {
//     return (
//         <div id="shop">
//             <div id='products'>
//                 {DUMMY_PRODUCTS.map((product) => (
//                     <Product product={product} addToBasket={addToBasket} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Shop;
// **************************************************

// **************************************************
// A-02: The second version of Shop.jsx removed the need for a direct list of products and instead allowed passing children as dynamic content. This made it more flexible, allowing it to render any content inside the Shop component, such as a dynamic list of products or other components.
// **************************************************
const Shop = ({ children }) => {
    return (
        <div id="shop">
            <div id='products'>
                {children}
            </div>
        </div>
    )
}

export default Shop;
// **************************************************