// **************************************************
// A-01:The initial version of App.jsx simply wrapped Shop and Header components. It used basic props for managing the cart, without integrating Context. The main logic for the shopping cart was handled locally.
// **************************************************
// import { useState } from 'react';

// import Shop from './components/Shop.jsx';
// import Header from './components/Header.jsx';

// function App() {
//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

//   function handleRemoveFromBasket({ productId }) {
//     const foundIndex = shoppingCart.items.findIndex(item => item.productId == productId);

//     if (foundIndex === -1) {
//       console.log($`There is no item in your basket with id ${productId}`)
//       return;
//     }

//     setShoppingCart((prevState) => {
//       const updatedItems = [...prevState.items];

//       // Decrease quantity
//       updatedItems[foundIndex].quantity -= 1;

//       // If quantity reaches 0, remove the item from the list
//       if (updatedItems[foundIndex].quantity === 0) {
//         updatedItems.splice(foundIndex, 1);  // Remove the item
//       }

//       console.log(updatedItems);

//       return { ...prevState, items: updatedItems };
//     })
//   }

//   function handleAddToBasket({ productId }) {
//     const foundIndex = shoppingCart.items.findIndex(item => item.productId == productId);

//     setShoppingCart((prevState) => {
//       if (foundIndex === -1) {
//         const updatedItems = [
//           ...prevState.items,
//           { productId, quantity: 1 },
//         ];

//         console.log(updatedItems)

//         return { ...prevState, items: updatedItems };
//       } else {
//         const updatedItems = [...prevState.items];
//         updatedItems[foundIndex].quantity += 1;

//         console.log(updatedItems)

//         return { ...prevState, items: updatedItems };
//       }
//     })
//   }

//   return (
//     <>
//       <Header shoppingCart={shoppingCart} addToBasket={handleAddToBasket} removeFromBasket={handleRemoveFromBasket} />
//       <Shop addToBasket={handleAddToBasket} />
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// A-02: In this version, App.jsx continued to wrap the Shop and Header components but was simplified compared to A-01. Instead of directly managing the cart state in App.jsx, the addToBasket and removeFromBasket functions were still passed as props to child components, but the overall structure was simplified to focus on just rendering the core components (Shop, Header). There was no global cart state management or context in this version, relying on props passing down the necessary functionality for managing the cart.
// **************************************************
// import { useState } from 'react';

// import Shop from './components/Shop.jsx';
// import Header from './components/Header.jsx';
// import Product from './components/Product.jsx';
// import { DUMMY_PRODUCTS } from './dummy-products.js';

// function App() {
//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

//   function handleRemoveFromBasket({ productId }) {
//     const foundIndex = shoppingCart.items.findIndex(item => item.productId == productId);

//     if (foundIndex === -1) {
//       console.log($`There is no item in your basket with id ${productId}`)
//       return;
//     }

//     setShoppingCart((prevState) => {
//       const updatedItems = [...prevState.items];

//       // Decrease quantity
//       updatedItems[foundIndex].quantity -= 1;

//       // If quantity reaches 0, remove the item from the list
//       if (updatedItems[foundIndex].quantity === 0) {
//         updatedItems.splice(foundIndex, 1);  // Remove the item
//       }

//       console.log(updatedItems);

//       return { ...prevState, items: updatedItems };
//     })
//   }

//   function handleAddToBasket({ productId }) {
//     const foundIndex = shoppingCart.items.findIndex(item => item.productId == productId);

//     setShoppingCart((prevState) => {
//       if (foundIndex === -1) {
//         const updatedItems = [
//           ...prevState.items,
//           { productId, quantity: 1 },
//         ];

//         console.log(updatedItems)

//         return { ...prevState, items: updatedItems };
//       } else {
//         const updatedItems = [...prevState.items];
//         updatedItems[foundIndex].quantity += 1;

//         console.log(updatedItems)

//         return { ...prevState, items: updatedItems };
//       }
//     })
//   }

//   return (
//     <>
//       <Header shoppingCart={shoppingCart} addToBasket={handleAddToBasket} removeFromBasket={handleRemoveFromBasket} />
//       <Shop >
//         {DUMMY_PRODUCTS.map((product) => (
//           <Product key={product.id} product={product} addToBasket={handleAddToBasket} />
//         ))}
//       </Shop>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// B-01: The updated version of App.jsx refactored to integrate CartContext for global state management. It wrapped the application with CartProvider to provide cart state and actions (addToBasket, removeFromBasket) to all child components. The props-driven approach was replaced by context usage.
// **************************************************
// import { useState } from 'react';

// import Shop from './components/Shop.jsx';
// import Header from './components/Header.jsx';
// import Product from './components/Product.jsx';
// import { DUMMY_PRODUCTS } from './dummy-products.js';
// import { CartContext } from './store/shopping-cart-context.jsx';

// function App() {
//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

//   function handleRemoveFromBasket({ productId }) {
//     const foundIndex = shoppingCart.items.findIndex(item => item.productId == productId);

//     if (foundIndex === -1) {
//       console.log($`There is no item in your basket with id ${productId}`)
//       return;
//     }

//     setShoppingCart((prevState) => {
//       const updatedItems = [...prevState.items];

//       // Decrease quantity
//       updatedItems[foundIndex].quantity -= 1;

//       // If quantity reaches 0, remove the item from the list
//       if (updatedItems[foundIndex].quantity === 0) {
//         updatedItems.splice(foundIndex, 1);  // Remove the item
//       }

//       console.log(updatedItems);

//       return { ...prevState, items: updatedItems };
//     })
//   }

//   function handleAddToBasket({ productId }) {
//     const foundIndex = shoppingCart.items.findIndex(item => item.productId == productId);

//     setShoppingCart((prevState) => {
//       if (foundIndex === -1) {
//         const updatedItems = [
//           ...prevState.items,
//           { productId, quantity: 1 },
//         ];

//         console.log(updatedItems)

//         return { ...prevState, items: updatedItems };
//       } else {
//         const updatedItems = [...prevState.items];
//         updatedItems[foundIndex].quantity += 1;

//         console.log(updatedItems)

//         return { ...prevState, items: updatedItems };
//       }
//     })
//   }

//   return (
//     // react-19 and newer
//     <CartContext value={{ items: [] }}>
//       <Header addToBasket={handleAddToBasket} removeFromBasket={handleRemoveFromBasket} />
//       <Shop >
//         {DUMMY_PRODUCTS.map((product) => (
//           <Product product={product} addToBasket={handleAddToBasket} />
//         ))}
//       </Shop>
//     </CartContext >

//     // older version:
//     // <CartContext.Provider>
//     // <Header shoppingCart={shoppingCart} addToBasket={handleAddToBasket} removeFromBasket={handleRemoveFromBasket} />
//     // <Shop >
//     //   {DUMMY_PRODUCTS.map((product) => (
//     //     <Product key={product.id} product={product} addToBasket={handleAddToBasket} />
//     //   ))}
//     // </Shop>
//     // </CartContext.Provider>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// B-01/01: In this version, App.jsx was updated to use the CartContext for managing the shopping cart's state. It leverages the React Context API to make the cart's state and functionality (e.g., adding and removing items) accessible across the entire app without needing to prop-drill.
// **************************************************
// import { useState } from 'react';

// import Shop from './components/Shop.jsx';
// import Header from './components/Header.jsx';
// import Product from './components/Product.jsx';
// import { DUMMY_PRODUCTS } from './dummy-products.js';
// import { CartContext } from './store/shopping-cart-context.jsx';

// function App() {
//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

//   function handleRemoveFromBasket({ productId }) {
//     const foundIndex = shoppingCart.items.findIndex(item => item.productId == productId);

//     if (foundIndex === -1) {
//       console.log($`There is no item in your basket with id ${productId}`)
//       return;
//     }

//     setShoppingCart((prevState) => {
//       const updatedItems = [...prevState.items];

//       // Decrease quantity
//       updatedItems[foundIndex].quantity -= 1;

//       // If quantity reaches 0, remove the item from the list
//       if (updatedItems[foundIndex].quantity === 0) {
//         updatedItems.splice(foundIndex, 1);  // Remove the item
//       }

//       console.log(updatedItems);

//       return { ...prevState, items: updatedItems };
//     })
//   }

//   function handleAddToBasket({ productId }) {
//     const foundIndex = shoppingCart.items.findIndex(item => item.productId == productId);

//     setShoppingCart((prevState) => {
//       if (foundIndex === -1) {
//         const updatedItems = [
//           ...prevState.items,
//           { productId, quantity: 1 },
//         ];

//         console.log(updatedItems)

//         return { ...prevState, items: updatedItems };
//       } else {
//         const updatedItems = [...prevState.items];
//         updatedItems[foundIndex].quantity += 1;

//         console.log(updatedItems)

//         return { ...prevState, items: updatedItems };
//       }
//     })
//   }

//   return (
//     <CartContext value={shoppingCart}>
//       <Header addToBasket={handleAddToBasket} removeFromBasket={handleRemoveFromBasket} />
//       <Shop >
//         {DUMMY_PRODUCTS.map((product) => (
//           <Product key={product.id}  product={product} addToBasket={handleAddToBasket} />
//         ))}
//       </Shop>
//     </CartContext >
//   );
// }

// export default App;
// **************************************************

// **************************************************
// B-02: In this version, App.jsx was refactored to incorporate the CartContext. Instead of passing addToBasket and removeFromBasket functions directly as props, these functions were now managed within a global context (CartContext), making state management and actions like adding or removing items from the cart more centralized and accessible throughout the application. This allowed Header, Shop, and other components to access and update the cart state without explicitly passing down props.
// **************************************************
// import { useState } from 'react';

// import Shop from './components/Shop.jsx';
// import Header from './components/Header.jsx';
// import Product from './components/Product.jsx';
// import { DUMMY_PRODUCTS } from './dummy-products.js';
// import { CartContext } from './store/shopping-cart-context.jsx';

// function App() {
//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

//   function handleRemoveFromBasket({ productId }) {
//     const foundIndex = shoppingCart.items.findIndex(item => item.productId == productId);

//     if (foundIndex === -1) {
//       console.log($`There is no item in your basket with id ${productId}`)
//       return;
//     }

//     setShoppingCart((prevState) => {
//       const updatedItems = [...prevState.items];

//       // Decrease quantity
//       updatedItems[foundIndex].quantity -= 1;

//       // If quantity reaches 0, remove the item from the list
//       if (updatedItems[foundIndex].quantity === 0) {
//         updatedItems.splice(foundIndex, 1);  // Remove the item
//       }

//       console.log(updatedItems);

//       return { ...prevState, items: updatedItems };
//     })
//   }

//   function handleAddToBasket({ productId }) {
//     const foundIndex = shoppingCart.items.findIndex(item => item.productId == productId);

//     setShoppingCart((prevState) => {
//       if (foundIndex === -1) {
//         const updatedItems = [
//           ...prevState.items,
//           { productId, quantity: 1 },
//         ];

//         console.log(updatedItems)

//         return { ...prevState, items: updatedItems };
//       } else {
//         const updatedItems = [...prevState.items];
//         updatedItems[foundIndex].quantity += 1;

//         console.log(updatedItems)

//         return { ...prevState, items: updatedItems };
//       }
//     })
//   }

//   const cardContextValue = {
//     items: shoppingCart.items,
//     addToBasket: handleAddToBasket,
//     removeFromBasket: handleRemoveFromBasket,
//   }

//   return (
//     <CartContext value={cardContextValue}>
//       <Header />
//       <Shop >
//         {DUMMY_PRODUCTS.map((product) => (
//           <Product key={product.id} product={product} />
//         ))}
//       </Shop>
//     </CartContext >
//   );
// }

// export default App;
// **************************************************

// **************************************************
// B-03: In this iteration, App.jsx was further refined to provide a more modular approach
// **************************************************
import Shop from './components/Shop.jsx';
import Header from './components/Header.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop >
        {DUMMY_PRODUCTS.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Shop>
    </CartContextProvider >
  );
}

export default App;
// **************************************************