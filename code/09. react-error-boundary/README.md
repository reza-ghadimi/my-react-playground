
---

# React Class-Based Components & ErrorHandler (Error Boundary) Component

## Overview

This document covers:

1. **Class-Based Components** — what they are, their lifecycle, and why/when to use them.
2. **ErrorHandler Component (Error Boundary)** — a special class-based component that catches errors in React.
3. **Lifecycle Methods of Class Components** and their **React Hook equivalents** for managing state, side effects, and performance optimizations.

---

## 1. Class-Based Components in React

### What Are They?

Class-based components are React components defined as ES6 classes extending `React.Component`. They manage state and lifecycle methods directly inside the class.

### When and Why to Use Class-Based Components?

**Historically:**
Class components were the only way to use features like state and lifecycle methods before React Hooks were introduced (React 16.8).

**Currently:**

* **Function components with Hooks** are the recommended and modern approach.
* Class components are now considered **legacy** and **less preferred** due to verbosity and complexity.
* However, **Error Boundaries** *must* be implemented as class components because React does not currently support error boundaries with function components/hooks.

### When to Use Class Components Today?

* **For Error Boundaries:** The only official use case for class components today is implementing Error Boundaries, which catch and handle runtime errors gracefully.
* **Legacy Codebases:** When working on older projects that already use class components extensively.
* **Third-party Libraries:** Sometimes needed for compatibility with existing code.

### When Not to Use Class Components?

* For new components requiring state or lifecycle features, **prefer function components with Hooks** (`useState`, `useEffect`, etc.).
* Avoid introducing new class components unless implementing Error Boundaries.

---

### Why Your Teacher Recommends Avoiding Class Components

* **Simpler Code:** Function components with Hooks provide cleaner and more concise code.
* **Better Performance:** Function components optimize rendering better in many cases.
* **Future-Proof:** React’s roadmap focuses on Hooks and functional components.
* **Less Boilerplate:** No need for constructors, binding `this`, or complex lifecycle method management.

---

## 2. ErrorHandler Component (Error Boundary)

### What is an Error Boundary?

Error Boundaries catch JavaScript errors anywhere in their child component tree, preventing the entire React app from crashing and showing a fallback UI instead.

### Why Are Error Boundaries Class Components?

Currently, React only supports Error Boundaries as class components. There’s no hook or functional equivalent for the `componentDidCatch` lifecycle method yet.

---

### Example: ErrorHandler Component Code

```jsx
import { Component } from 'react';

class ErrorHandler extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      errorMessage: null,
    };
  }

  componentDidCatch(error) {
    console.error(`componentDidCatch: ${error.message}`);
    this.setState({
      hasError: true,
      errorMessage: error.message || 'Something went wrong!',
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <h2>Something went wrong!</h2>
          <p>We are working on fixing it.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorHandler;
```

---

### Usage of ErrorHandler

Wrap your app or parts of your app to catch errors:

```jsx
<ErrorHandler>
  <MyComponent />
</ErrorHandler>
```

---

## 3. Lifecycle Methods of Class-Based Components & Their Hook Equivalents

### Mounting Phase (When Component is Added to DOM)

| Lifecycle Method                  | Purpose                                      | Hook Equivalent                                        |
| --------------------------------- | -------------------------------------------- | ------------------------------------------------------ |
| `constructor(props)`              | Initialize state, bind methods               | Inline state initialization with `useState`            |
| `static getDerivedStateFromProps` | Sync state to props before render (rare use) | No direct hook; sometimes use `useEffect` or `useMemo` |
| `render()`                        | Render JSX                                   | Function component’s return statement                  |
| `componentDidMount()`             | Run side effects after first render          | `useEffect(() => { ... }, [])` (runs once)             |

---

### Updating Phase (When Props or State Change)

| Lifecycle Method                  | Purpose                                                | Hook Equivalent                                      |
| --------------------------------- | ------------------------------------------------------ | ---------------------------------------------------- |
| `static getDerivedStateFromProps` | Called before every render to update state             | Use `useEffect` or `useMemo` as needed               |
| `shouldComponentUpdate`           | Optimize rendering by skipping unnecessary renders     | `React.memo`, `useMemo`, or `useCallback`            |
| `render()`                        | Re-render component                                    | Function component’s return                          |
| `getSnapshotBeforeUpdate`         | Capture info (e.g., scroll position) before DOM update | No exact hook; similar behavior with refs or effects |
| `componentDidUpdate`              | React to prop/state changes after render               | `useEffect(() => { ... }, [dependencies])`           |

---

### Unmounting Phase (Cleanup Before Removal)

| Lifecycle Method         | Purpose                                  | Hook Equivalent                            |
| ------------------------ | ---------------------------------------- | ------------------------------------------ |
| `componentWillUnmount()` | Cleanup timers, listeners, subscriptions | Cleanup function returned from `useEffect` |

---

### Error Handling

| Lifecycle Method    | Purpose                          | Hook Equivalent                                                        |
| ------------------- | -------------------------------- | ---------------------------------------------------------------------- |
| `componentDidCatch` | Catch errors in child components | **No hook equivalent; must use class components for Error Boundaries** |

---

### State & Other Features Comparison

| Feature                   | Class Component Approach                                          | Functional Component (Hooks)               |
| ------------------------- | ----------------------------------------------------------------- | ------------------------------------------ |
| State management          | `this.state` and `this.setState()`                                | `useState()`                               |
| Side effects              | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` | `useEffect()`                              |
| Memoization / Performance | `shouldComponentUpdate`, `PureComponent`                          | `useMemo()`, `useCallback()`, `React.memo` |
| Context API               | `this.context`                                                    | `useContext()`                             |
| Ref to DOM elements       | `createRef()`, `ref` callbacks                                    | `useRef()`                                 |

---

### Example: Class Lifecycle vs Hooks

**Class-based:**

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count updated');
    }
  }

  componentWillUnmount() {
    console.log('Cleanup');
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

**Functional with Hooks:**

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted');
    return () => {
      console.log('Cleanup');
    };
  }, []);

  useEffect(() => {
    console.log('Count updated');
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## Summary

| Aspect                | Recommendation                                              |
| --------------------- | ----------------------------------------------------------- |
| **State & Lifecycle** | Use function components with Hooks                          |
| **Error Boundaries**  | Use class-based components (like ErrorHandler)              |
| **Legacy Codebases**  | Continue with class components as needed                    |
| **New Development**   | Avoid class components unless implementing Error Boundaries |

---
