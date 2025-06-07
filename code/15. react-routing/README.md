
---

# 🧭 React Router Lessons – Routing in React

This project is a **hands-on guide to learning routing in React** using [`react-router-dom`](https://reactrouter.com/). It includes nested routes, dynamic routes, error handling, and navigation.

---

## 📦 Project Structure

```
src/
├── App.jsx                     # Main App component with router provider
├── Layouts/
│   └── RootLayout.jsx         # Shared layout for nested routes
├── components/
│   └── MainNavigation.jsx     # Navigation bar using NavLink
├── pages/
│   ├── HomePage.jsx           # Landing page
│   ├── ProductsPage.jsx       # Product list with links
│   ├── ProductDetailPage.jsx  # Individual product detail using route param
│   └── ErrorPage.jsx          # Fallback page for routing errors
└── main.jsx                   # Entry point (renders <App />)
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install react-router-dom
```

### 2. Run the App

```bash
npm run dev
```

> Make sure you're using [Vite](https://vitejs.dev/) or a similar bundler for fast development.

---

## 🧩 Routing Concepts Covered

### ✅ Basic Route Setup

Inside `App.jsx`, we define the app’s routes using `createBrowserRouter`:

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,      // Shared layout component
    errorElement: <ErrorPage />,  // Shows when a route fails
    children: [
      { index: true, element: <HomePage /> },               // Renders at "/"
      { path: 'products', element: <ProductsPage /> },      // Renders at "/products"
      { path: 'products/:productId', element: <ProductDetailPage /> } // Dynamic route
    ],
  }
]);
```

---

### 🧱 Nested Layout (`RootLayout`)

```jsx
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet /> {/* Renders the matched child route component */}
      </main>
    </>
  );
}
```

---

### 🌐 Navigation Bar with `NavLink`

```jsx
<NavLink to="/" end>Home</NavLink>
<NavLink to="/products">Products</NavLink>
```

* `NavLink` highlights the active link using CSS.
* `end` ensures `/` only matches the exact home route.

---

### 🧭 Dynamic Routes (`useParams`)

```jsx
const params = useParams();
<p>{params.productId}</p>
```

* `useParams()` grabs route parameters like `:productId` from the URL.
* Perfect for detail pages (e.g. `/products/p1`).

---

### 🧹 Error Handling (`errorElement`)

```jsx
<ErrorPage />
```

* Automatically shown when the user visits an undefined route or when a child route throws an error.

---

## 🔗 Example Pages Explained

### 🏠 `HomePage.jsx`

Simple landing page shown at `/`.

---

### 🛍️ `ProductsPage.jsx`

Displays a list of static products with links to individual product pages.

```jsx
<Link to={product.id}>{product.title}</Link>
```

Each link navigates to `/products/:productId`.

---

### 📄 `ProductDetailPage.jsx`

Displays the product ID dynamically based on the URL.

```jsx
const params = useParams();
<p>{params.productId}</p>
```

Also includes a **relative link** back:

```jsx
<Link to=".." relative="path">Back</Link>
```

---

### ❌ `ErrorPage.jsx`

Fallback component when routing fails, like:

* Typo in URL
* Route not found
* Route-specific error thrown

---

## 🧠 Concepts Recap

| Concept        | File                        | Description                    |
| -------------- | --------------------------- | ------------------------------ |
| Layout Routes  | `RootLayout.jsx`            | Shared layout for nested pages |
| Nested Routes  | `App.jsx`                   | Children inside root path      |
| Dynamic Routes | `ProductDetailPage.jsx`     | Read `:productId` from URL     |
| Navigation     | `MainNavigation.jsx`        | Active styling with `NavLink`  |
| Relative Links | `ProductDetailPage.jsx`     | Go up one level with `".."`    |
| Error Handling | `ErrorPage.jsx` + `App.jsx` | Shown for bad or broken routes |

---

## 📚 Learn More

* [React Router Docs](https://reactrouter.com/)
* [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)

---

## 🧪 Next Steps / Challenges

Try extending the app by:

* Fetching product details from an API
* Adding a 404 message inside `ErrorPage`
* Implementing route guards (e.g., protected routes)
* Adding a fallback `<Loading />` state using `lazy` and `Suspense`

---
