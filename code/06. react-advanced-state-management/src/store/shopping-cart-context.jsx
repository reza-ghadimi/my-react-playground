// **************************************************
// B-01:  This code defines the CartContext using the createContext function, setting up the initial structure for the context with only the items array.
// **************************************************
// import { createContext } from 'react';

// export const CartContext = createContext({
//   items: []
// });
// **************************************************

// **************************************************
// B-02: The CartContext is updated to include methods (addToBasket and removeFromBasket) within its default value.
// **************************************************
// import { createContext } from 'react';

// export const CartContext = createContext({
//   items: [],
//   addToBasket: () => {},
//   removeFromBasket: () => {}
// });
// **************************************************

// **************************************************
// B-03: This version of the context introduces the implementation of useState to manage the shopping cart’s state, allowing dynamic updates to the cart items.
// **************************************************
// import { useState, createContext } from 'react';

// export const CartContext = createContext({
//   items: [],
//   addToBasket: () => { },
//   removeFromBasket: () => { }
// });


// export default function CartContextProvider({ children }) {
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
//       {children}
//     </CartContext>
//   )
// }
// **************************************************

// **************************************************
// B-04: This version refines the previous implementation using useReducer for more complex state management of the shopping cart, replacing useState with a more scalable solution.
// **************************************************
import { useReducer, createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addToBasket: () => { },
  removeFromBasket: () => { }
});

function shoppingCartReducer(state, action) {
  if (action.type === 'REMOVE_ITEM') {

    const foundIndex = state.items.findIndex(item => item.productId == action.payload);

    if (foundIndex === -1) {
      console.log($`There is no item in your basket with id ${action.payload}`)
      return;
    }

    const updatedItems = [...state.items];

    // Decrease quantity
    updatedItems[foundIndex].quantity -= 1;

    // If quantity reaches 0, remove the item from the list
    if (updatedItems[foundIndex].quantity === 0) {
      updatedItems.splice(foundIndex, 1);  // Remove the item
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'ADD_ITEM') {

    const foundIndex = state.items.findIndex(item => item.productId == action.payload);

    if (foundIndex === -1) {
      const updatedItems = [
        ...state.items,
        { productId: action.payload, quantity: 1 },
      ];

      console.log(updatedItems)

      return { ...state, items: updatedItems };
    } else {
      const updatedItems = [...state.items];
      updatedItems[foundIndex].quantity += 1;

      console.log(updatedItems)

      return { ...state, items: updatedItems };
    }
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    items: [],
  });

  function handleRemoveFromBasket({ productId }) {
    shoppingCartDispatch({
      type: "REMOVE_ITEM",
      payload: productId
    })
  }

  function handleAddToBasket({ productId }) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: productId
    })
  }

  const cardContextValue = {
    items: shoppingCartState.items,
    addToBasket: handleAddToBasket,
    removeFromBasket: handleRemoveFromBasket,
  }

  return (
    <CartContext value={cardContextValue}>
      {children}
    </CartContext>
  )
}
// **************************************************