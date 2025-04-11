
---

```markdown
# 🚀 React Advanced State Management with Context API + useReducer

Learn how to go **from zero to hero** with advanced global state management in React using **Context API** and **useReducer**. This guide will walk you through setting up a scalable pattern to manage shared state in your app — without installing external libraries like Redux.

---

## 🧱 What You’ll Learn

- How to use `useReducer` for predictable state transitions
- How to share global state using the Context API
- How to structure and scale your app architecture

---

## 🧰 Tools & Requirements

- Node.js (v14+)
- npm or yarn
- Basic knowledge of React

---

## 🧑‍🏫 Step-by-Step Setup

### 1. Create a React App

```bash
npx create-react-app context-reducer-demo
cd context-reducer-demo
```

> Or use Vite if you prefer:
> ```bash
> npm create vite@latest context-reducer-demo -- --template react
> ```

---

### 2. Set Up Folder Structure

Create the following inside `src/`:

```
src/
├── context/
│   ├── StateProvider.jsx
│   ├── reducer.js
│   └── initialState.js
```

---

### 3. Define the Initial State

```js
// src/context/initialState.js
export const initialState = {
  user: null,
  theme: 'light',
};
```

---

### 4. Create the Reducer

```js
// src/context/reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};
```

---

### 5. Create the Context Provider

```jsx
// src/context/StateProvider.jsx
import React, { createContext, useContext, useReducer } from 'react';
import { initialState } from './initialState';
import { reducer } from './reducer';

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
```

---

### 6. Wrap the App with the Provider

```jsx
// src/index.js or src/main.jsx (depending on setup)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './context/StateProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
```

---

### 7. Access and Update Global State

```jsx
// src/components/UserPanel.jsx
import React from 'react';
import { useStateValue } from '../context/StateProvider';

function UserPanel() {
  const [{ user, theme }, dispatch] = useStateValue();

  const login = () => {
    dispatch({
      type: 'SET_USER',
      payload: { name: 'Jane Doe', email: 'jane@example.com' },
    });
  };

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div>
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <h2>User: {user?.name || 'Not logged in'}</h2>
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default UserPanel;
```

---

### 8. Use the Component in App

```jsx
// src/App.jsx
import React from 'react';
import UserPanel from './components/UserPanel';

function App() {
  return (
    <div>
      <h1>React Context + useReducer Demo</h1>
      <UserPanel />
    </div>
  );
}

export default App;
```

---

## 🧠 Summary

You’ve now built a fully functional **global state management system** using React's built-in tools. This pattern is perfect for small to medium-sized apps and lays the foundation for scalable architecture.

No Redux. No boilerplate. All React. ✨

---
