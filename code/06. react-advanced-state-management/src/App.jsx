import { useState } from 'react';

import Shop from './components/Shop.jsx';
import Header from './components/Header.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });
  return (
    <>
    </>
  );
}

export default App;
