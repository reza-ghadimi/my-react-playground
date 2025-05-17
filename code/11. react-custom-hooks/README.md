
---

# 🪝 Custom React Hooks

## Overview

Custom React hooks are user-defined functions that encapsulate reusable logic involving React state and side effects. They allow you to extract logic from components, improve maintainability, and keep your UI components focused purely on rendering.

---

## ✨ Why Use Custom Hooks?

* 🔁 **Reusability** – Avoid repeating the same logic in multiple components
* 🧼 **Cleaner Code** – Move logic out of components for clarity
* 🧪 **Testability** – Hooks can be isolated and unit-tested
* 📦 **Encapsulation** – Hide complex details behind a simple API

---

## 📁 Organizing Your Hooks

Place custom hooks in a dedicated folder such as:

```
src/
├── components/
├── hooks/
│   ├── useWindowSize.js
│   ├── useDebounce.js
│   └── useLocalStorage.js
```

### Naming Convention

* All hooks should start with the `use` prefix (e.g., `useScroll`, `useTheme`)
* File names should match the hook name for consistency
* Each hook should ideally live in its own file

---

## 🧪 Sample Hook: `useWindowSize`

Tracks the browser window size and updates on resize.

```js
import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

### Usage

```jsx
import { useWindowSize } from './hooks/useWindowSize';

function ResponsiveComponent() {
  const { width } = useWindowSize();

  return (
    <div>
      {width < 768 ? 'Mobile View' : 'Desktop View'}
    </div>
  );
}
```

---

## ⌛ Sample Hook: `useDebounce`

Delays updating a value until after a specified delay.

```js
import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
```

### Usage

```jsx
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 500);

// Use debouncedSearch in API call
```

---

## 🗃️ Sample Hook: `useLocalStorage`

Persists state in the browser's localStorage.

```js
import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
```

---

## 🧩 Best Practices

* Keep each hook focused on one responsibility
* Use built-in hooks (like `useState`, `useEffect`, `useRef`) inside custom hooks
* Return only what’s needed (avoid exposing unnecessary internal logic)
* Ensure hooks are composable when possible

---

## ✅ Conclusion

Custom hooks are a powerful feature in React that lead to more modular, readable, and maintainable code. With consistent organization and naming, they become a natural and essential part of scalable application architecture.

---