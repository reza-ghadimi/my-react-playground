// **************************************************
// A-01: initially displayed a basic header with the store logo, title, and a button showing the number of items in the cart. The cart was managed via props, and the CartModal was conditionally rendered with actions like "Close" or "Checkout".
// **************************************************
// import { useRef } from 'react'

// import CartModal from './CartModal.jsx';
// import logo from '../../public/logo.png'

// const Header = ({ shoppingCart, addToBasket, removeFromBasket }) => {

//     const cartModal = new useRef();
//     // Calculate the number of distinct items in the cart
//     const distinctItemsCount = shoppingCart.items.length;
//     // Calculate the total quantity of all items in the cart
//     const totalQuantity = shoppingCart.items.reduce((total, item) => total + item.quantity, 0);

//     function handleOpenCartClick() {
//         cartModal.current.open();
//     }

//     let cartModalActions = <button>Close</button>;

//     if (totalQuantity > 0) {
//         cartModalActions = (
//             <>
//                 <button>Close</button>
//                 <button>Checkout</button>
//             </>
//         );
//     }


//     return (
//         <>
//             <CartModal
//                 ref={cartModal}
//                 title="Your Cart"
//                 actions={cartModalActions}

//                 items={shoppingCart.items}

//                 addToBasket={addToBasket}
//                 removeFromBasket={removeFromBasket}
//             />

//             <header id="main-header">
//                 <div className="logo-section">
//                     <img src={logo} alt="Logo" className="logo" />
//                     <h1 className="header-text">My Store</h1>
//                 </div>
//                 <button onClick={handleOpenCartClick} className="cart-button">Cart ({totalQuantity})</button>
//             </header>
//         </>
//     );
// }

// export default Header;
// **************************************************

// **************************************************
// B-01: The updated Header.jsx component refactored to use CartContext. It now directly accessed the items array from context, eliminating prop-drilling. A CartModal was still used to display the cart, with dynamic actions based on the total quantity.
// **************************************************
// import logo from '../../public/logo.png'

// import CartModal from './CartModal.jsx';
// import { CartContext } from '../store/shopping-cart-context.jsx';

// import { useRef, useContext } from 'react';

// const Header = ({ addToBasket, removeFromBasket }) => {

//     const cartModal = new useRef();
//     const { items } = useContext(CartContext);

//     console.log(items);

//     // Calculate the number of distinct items in the cart
//     const distinctItemsCount = items.length;
//     // Calculate the total quantity of all items in the cart
//     const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

//     function handleOpenCartClick() {
//         cartModal.current.open();
//     }

//     let cartModalActions = <button>Close</button>;

//     if (totalQuantity > 0) {
//         cartModalActions = (
//             <>
//                 <button>Close</button>
//                 <button>Checkout</button>
//             </>
//         );
//     }


//     return (
//         <>
//             <CartModal
//                 ref={cartModal}
//                 title="Your Cart"
//                 actions={cartModalActions}

//                 addToBasket={addToBasket}
//                 removeFromBasket={removeFromBasket}
//             />

//             <header id="main-header">
//                 <div className="logo-section">
//                     <img src={logo} alt="Logo" className="logo" />
//                     <h1 className="header-text">My Store</h1>
//                 </div>
//                 <button onClick={handleOpenCartClick} className="cart-button">Cart ({totalQuantity})</button>
//             </header>
//         </>
//     );
// }

// export default Header;
// **************************************************

// **************************************************
// B-02: The final version of Header.jsx further simplified by removing unnecessary prop parameters. It now fully relies on CartContext to manage cart state and modal actions. It uses useContext to access the cart and dynamically renders the cart button with the total quantity.
// **************************************************
import logo from '../../public/logo.png'

import CartModal from './CartModal.jsx';
import { CartContext } from '../store/shopping-cart-context.jsx';

import { useRef, useContext } from 'react';

const Header = () => {

    const cartModal = new useRef();
    const { items } = useContext(CartContext);

    console.log(items);

    // Calculate the number of distinct items in the cart
    const distinctItemsCount = items.length;
    // Calculate the total quantity of all items in the cart
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

    function handleOpenCartClick() {
        cartModal.current.open();
    }

    let cartModalActions = <button>Close</button>;

    if (totalQuantity > 0) {
        cartModalActions = (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    }


    return (
        <>
            <CartModal
                ref={cartModal}
                title="Your Cart"
                actions={cartModalActions}
            />

            <header id="main-header">
                <div className="logo-section">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1 className="header-text">My Store</h1>
                </div>
                <button onClick={handleOpenCartClick} className="cart-button">Cart ({totalQuantity})</button>
            </header>
        </>
    );
}

export default Header;
// **************************************************