// **************************************************
// A-01: iterated over DUMMY_PRODUCTS and displayed each cart item along with the quantity. It allowed adding/removing items to/from the cart by interacting with addToBasket and removeFromBasket props. The total price was calculated based on the cart's contents.
// **************************************************
// import { DUMMY_PRODUCTS } from '../dummy-products.js'

// const Cart = ({ items, addToBasket, removeFromBasket }) => {
//     const totalPrice = items.reduce((acc, cartItem) => {
//         // Find the corresponding product in DUMMY_PRODUCTS
//         const product = DUMMY_PRODUCTS.find(product => product.id === cartItem.productId);

//         if (product) {
//             // Multiply product price by the quantity in the cart
//             acc += product.price * cartItem.quantity;
//         }
//         return acc;
//     }, 0);

//     const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

//     return (
//         <div id="cart">
//             {items.length === 0 ?
//                 <p>No items in cart!</p> :
//                 <ul id="cart-items">
//                     {items.map((item) => {
//                         const foundProduct = DUMMY_PRODUCTS.find(current => current.id == item.productId);
//                         const formattedPrice = `$${foundProduct.price.toFixed(2)}`;

//                         return (
//                             <li key={item.productId}>
//                                 <div>
//                                     <span>{foundProduct.name}</span>
//                                     <span> ({formattedPrice})</span>
//                                 </div>
//                                 <div className="cart-item-actions">
//                                     <button onClick={() => removeFromBasket({ productId: item.productId })}>
//                                         -
//                                     </button>
//                                     <span>{item.quantity}</span>
//                                     <button onClick={() => addToBasket({ productId: item.productId })}>
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             }
//             <p id="cart-total-price">
//                 Cart Total: <strong>{formattedTotalPrice}</strong>
//             </p>
//         </div>
//     );
// }

// export default Cart;
// **************************************************

// **************************************************
// B-01: refactored to use CartContext. The logic for calculating the total price and iterating over cart items remained, but now it accessed the cart state directly from context instead of passing it as a prop. The component's flexibility and reuse were increased.
// **************************************************
// import { use, useContext } from 'react';
// import { DUMMY_PRODUCTS } from '../dummy-products.js'
// import { CartContext } from '../store/shopping-cart-context.jsx';

// const Cart = ({ addToBasket, removeFromBasket }) => {
//     // more flexible than useContext:
//     // const cartContext = use(CartContext);

//     const { items } = useContext(CartContext);
//     // const cartContext = useContext(CartContext);
//     // const items = cartContext.items;

//     const totalPrice = items.reduce((acc, cartItem) => {
//         // Find the corresponding product in DUMMY_PRODUCTS
//         const product = DUMMY_PRODUCTS.find(product => product.id === cartItem.productId);

//         if (product) {
//             // Multiply product price by the quantity in the cart
//             acc += product.price * cartItem.quantity;
//         }
//         return acc;
//     }, 0);

//     const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

//     return (
//         <div id="cart">
//             {items.length === 0 ?
//                 <p>No items in cart!</p> :
//                 <ul id="cart-items">
//                     {items.map((item, index) => {
//                         const foundProduct = DUMMY_PRODUCTS.find(current => current.id == item.productId);
//                         const formattedPrice = `$${foundProduct.price.toFixed(2)}`;

//                         return (
//                             <li key={item.productId}>
//                                 <div>
//                                     <span>{foundProduct.name}</span>
//                                     <span> ({formattedPrice})</span>
//                                 </div>
//                                 <div className="cart-item-actions">
//                                     <button onClick={() => removeFromBasket({ productId: item.productId })}>
//                                         -
//                                     </button>
//                                     <span>{item.quantity}</span>
//                                     <button onClick={() => addToBasket({ productId: item.productId })}>
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             }
//             <p id="cart-total-price">
//                 Cart Total: <strong>{formattedTotalPrice}</strong>
//             </p>
//         </div>
//     );
// }

// export default Cart;
// **************************************************

// **************************************************
// B-01: Another way to use CartContext
// **************************************************
// import { DUMMY_PRODUCTS } from '../dummy-products.js'
// import { CartContext } from '../store/shopping-cart-context.jsx';

// const Cart = ({ addToBasket, removeFromBasket }) => {
//     return (
//         <CartContext.Consumer>
//             {(cartContext) => {
//                 const totalPrice = cartContext.items.reduce((acc, cartItem) => {
//                     const product = DUMMY_PRODUCTS.find(product => product.id === cartItem.productId);

//                     if (product) {
//                         acc += product.price * cartItem.quantity;
//                     }
//                     return acc;
//                 }, 0);

//                 const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

//                 <div id="cart">
//                     {cartContext.items.length === 0 ?
//                         <p>No items in cart!</p> :
//                         <ul id="cart-items">
//                             {cartContext.items.map((item, index) => {
//                                 const foundProduct = DUMMY_PRODUCTS.find(current => current.id == item.productId);
//                                 const formattedPrice = `$${foundProduct.price.toFixed(2)}`;

//                                 return (
//                                     <li key={item.productId}>
//                                         <div>
//                                             <span>{foundProduct.name}</span>
//                                             <span> ({formattedPrice})</span>
//                                         </div>
//                                         <div className="cart-item-actions">
//                                             <button onClick={() => removeFromBasket({ productId: item.productId })}>
//                                                 -
//                                             </button>
//                                             <span>{item.quantity}</span>
//                                             <button onClick={() => addToBasket({ productId: item.productId })}>
//                                                 +
//                                             </button>
//                                         </div>
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     }
//                     <p id="cart-total-price">
//                         Cart Total: <strong>{formattedTotalPrice}</strong>
//                     </p>
//                 </div>
//             }}
//         </CartContext.Consumer>
//     );
// }

// export default Cart;
// **************************************************

// **************************************************
// B-02: The final version of Cart.jsx made full use of useContext to consume the cart state from CartContext. It displayed the items in the cart and allowed actions like adding/removing items by calling context-provided methods. The total price calculation was unchanged, but the cart data was now globally managed.
// **************************************************
import { use, useContext } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js'
import { CartContext } from '../store/shopping-cart-context.jsx';

const Cart = () => {
    // more flexible than useContext:
    // const cartContext = use(CartContext);

    const { items, addToBasket, removeFromBasket } = useContext(CartContext);
    // const cartContext = useContext(CartContext);
    // const items = cartContext.items;

    const totalPrice = items.reduce((acc, cartItem) => {
        // Find the corresponding product in DUMMY_PRODUCTS
        const product = DUMMY_PRODUCTS.find(product => product.id === cartItem.productId);

        if (product) {
            // Multiply product price by the quantity in the cart
            acc += product.price * cartItem.quantity;
        }
        return acc;
    }, 0);

    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

    return (
        <div id="cart">
            {items.length === 0 ?
                <p>No items in cart!</p> :
                <ul id="cart-items">
                    {items.map((item, index) => {
                        const foundProduct = DUMMY_PRODUCTS.find(current => current.id == item.productId);
                        const formattedPrice = `$${foundProduct.price.toFixed(2)}`;

                        return (
                            <li key={item.productId}>
                                <div>
                                    <span>{foundProduct.name}</span>
                                    <span> ({formattedPrice})</span>
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => removeFromBasket({ productId: item.productId })}>
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => addToBasket({ productId: item.productId })}>
                                        +
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            }
            <p id="cart-total-price">
                Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
        </div>
    );
}

export default Cart;
// **************************************************