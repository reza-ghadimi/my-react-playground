// Importing required functions and components from react-router-dom
import {
  RouterProvider,         // Provides routing context to the application
  createBrowserRouter,    // Creates a browser history-based router

  // Route,
  // createRoutesFromElements, // Alternative JSX-based route creation method (currently unused)
} from 'react-router-dom';

// Importing error page component to show in case of a route error
import ErrorPage from './pages/ErrorPage.jsx';

// Importing layout component that wraps child route components
import RootLayout from './Layouts/RootLayout.jsx';

// Importing individual page components
import HomePage from './pages/HomePage.jsx';              // Landing or home page
import ProductsPage from './pages/ProductsPage.jsx';      // Lists all products
import ProductDetailPage from './pages/ProductDetailPage.jsx'; // Shows details of a selected product

// Alternative JSX-based route creation using createRoutesFromElements (commented out)
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// Creating the router using route definitions (commented out)
// const router = createBrowserRouter(routeDefinitions);

// Simpler route array format (commented out)
// const router = createBrowserRouter([
//   { path: '/', element: <HomePage /> },
//   { path: '/products', element: <ProductsPage /> },
// ]);

// Defining the actual router configuration
const router = createBrowserRouter([
  {
    path: '/',                      // Base path of the application
    element: <RootLayout />,        // Layout wrapper for nested routes | A shared layout for nested routes. Used to avoid repeating layout code.
    errorElement: <ErrorPage />,    // Fallback component for route errors (e.g., 404)
    children: [                     // Nested routes within RootLayout
      {
        index: true,                // Default child route for "/"
        element: <HomePage />       // Renders HomePage at root "/"
      },
      {
        path: 'products',           // Matches "/products"
        element: <ProductsPage />   // Renders ProductsPage
      },
      {
        path: 'products/:productId',        // Matches dynamic path like "/products/123"
        element: <ProductDetailPage />      // Renders ProductDetailPage using productId param
      }
    ],
  }
]);

// Main application component that applies the router
function App() {
  return <RouterProvider router={router} />; // Enables routing in the React app
}

// Exporting App component as default export
export default App;