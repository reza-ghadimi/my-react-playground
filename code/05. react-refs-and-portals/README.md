
---

# 🧠 Understanding `Ref` and `Portal` in React

This document explains two powerful React concepts — **Refs** and **Portals** — with examples, use-cases, and best practices.

---

## 📌 Table of Contents

- [🧠 Understanding `Ref` and `Portal` in React](#-understanding-ref-and-portal-in-react)
  - [📌 Table of Contents](#-table-of-contents)
  - [🔍 What is a Ref?](#-what-is-a-ref)
  - [💡 When to Use Refs](#-when-to-use-refs)
  - [⚙️ How to Use Refs](#️-how-to-use-refs)
    - [1. **Using `useRef()` in Functional Components**](#1-using-useref-in-functional-components)
    - [2. **Accessing DOM Elements in Class Components**](#2-accessing-dom-elements-in-class-components)
  - [🧬 Forwarding Refs](#-forwarding-refs)
  - [🚪 What is a Portal?](#-what-is-a-portal)
    - [🔧 How to Use Portals](#-how-to-use-portals)
  - [📦 Example Use of Portals](#-example-use-of-portals)
  - [🔗 Refs with Portals](#-refs-with-portals)
  - [🆚 Ref vs useState](#-ref-vs-usestate)
    - [🔍 Core Differences](#-core-differences)
    - [✅ When to Use Each](#-when-to-use-each)
    - [🧪 Example Comparison](#-example-comparison)
  - [✅ Best Practices](#-best-practices)
  - [📚 References](#-references)

---

## 🔍 What is a Ref?

In React, a **ref (reference)** is a way to get direct access to a DOM node or a React element created in the render method.

```js
const ref = useRef();
```

- Refs do **not trigger re-renders** when updated.
- Typically used to access underlying DOM elements or manage focus, text selection, or media playback.

📘 **Docs**:
- [React Refs – React Docs](https://reactjs.org/docs/refs-and-the-dom.html)
- [MDN: Document.querySelector (similar usage)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

---

## 💡 When to Use Refs

- Managing focus, text selection, or media playback
- Triggering imperative animations
- Integrating with third-party DOM libraries
- Reading values without re-rendering

---

## ⚙️ How to Use Refs

### 1. **Using `useRef()` in Functional Components**

```jsx
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}
```

---

### 2. **Accessing DOM Elements in Class Components**

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return <input ref={this.myRef} />;
  }
}
```

📘 **Docs**:
- [React.createRef – React Docs](https://reactjs.org/docs/refs-and-the-dom.html#creating-refs)
- [MDN: HTMLElement.focus()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)

---

## 🧬 Forwarding Refs

If you want a parent component to get a reference to a child’s DOM node, you can **forward the ref**.

```jsx
const FancyInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

function Parent() {
  const inputRef = useRef();

  return <FancyInput ref={inputRef} />;
}
```

📘 **Docs**:
- [React Forwarding Refs – React Docs](https://reactjs.org/docs/forwarding-refs.html)

---

## 🚪 What is a Portal?

**Portals** provide a way to render children into a DOM node **outside** the parent component’s DOM hierarchy.

```jsx
ReactDOM.createPortal(child, container)
```

📘 **Docs**:
- [React Portals – React Docs](https://reactjs.org/docs/portals.html)
- [MDN: Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

---

### 🔧 How to Use Portals

Suppose you have a `modal-root` outside the main app in `index.html`:

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

Then in your component:

```jsx
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}
```

---

## 📦 Example Use of Portals

```jsx
function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <Modal>
          <div>
            <p>This is a modal!</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </Modal>
      )}
    </>
  );
}
```

---

## 🔗 Refs with Portals

You can still use refs **inside** a Portal just like in normal DOM trees:

```jsx
function ModalWithRef() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return ReactDOM.createPortal(
    <input ref={inputRef} />,
    document.getElementById('modal-root')
  );
}
```

---

## 🆚 Ref vs useState

### 🔍 Core Differences

| Feature                      | `useState`                             | `useRef`                                |
|-----------------------------|----------------------------------------|-----------------------------------------|
| Triggers re-render?         | ✅ Yes                                 | ❌ No                                   |
| Value persists across renders? | ✅ Yes                              | ✅ Yes                                  |
| Used for UI state?          | ✅ Yes                                 | ❌ No (mostly for DOM or non-UI logic)  |
| DOM access?                 | ❌ No                                  | ✅ Yes                                  |
| Ideal for side-effects?     | ⚠️ Sometimes (usually in `useEffect`) | ✅ Often used in effects                |
| Value mutable?              | ❌ No (must use setter)                | ✅ Yes (mutable `.current` property)    |

---

### ✅ When to Use Each

| Use Case                                    | Hook to Use     |
|--------------------------------------------|-----------------|
| UI updates based on input or data changes  | `useState`      |
| Holding a DOM element reference             | `useRef`        |
| Tracking previous values without re-renders | `useRef`        |
| Triggering re-render on change             | `useState`      |
| Timer IDs, instance flags, intervals       | `useRef`        |

---

### 🧪 Example Comparison

```jsx
import { useRef, useState } from "react";

function RefVsStateExample() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    // Triggers re-render
    setCountState(prev => prev + 1);

    // Updates mutable ref but does not re-render
    countRef.current += 1;

    console.log("Ref Count:", countRef.current); // ✅ logs every time
  };

  return (
    <>
      <p>State Count: {countState}</p>
      <p>Ref Count (no re-render): {countRef.current}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
```

📘 **Docs**:
- [React: useRef](https://reactjs.org/docs/hooks-reference.html#useref)
- [React: useState](https://reactjs.org/docs/hooks-state.html)

---

## ✅ Best Practices

| Do ✔️ | Don’t ❌ |
|------|----------|
| Use refs for DOM access or external libraries | Don't use refs to replace state or props |
| Use portals for modals, tooltips, popovers | Don't overuse portals; they break DOM hierarchy |
| Forward refs when building reusable components | Don’t mutate refs directly unless necessary |
| Clean up refs (if necessary) on unmount | Avoid storing data in refs unless needed |

---

## 📚 References

- 🔗 [React Refs – React Docs](https://reactjs.org/docs/refs-and-the-dom.html)
- 🔗 [React Forwarding Refs – React Docs](https://reactjs.org/docs/forwarding-refs.html)
- 🔗 [React Portals – React Docs](https://reactjs.org/docs/portals.html)
- 🔗 [React: useRef](https://reactjs.org/docs/hooks-reference.html#useref)
- 🔗 [React: useState](https://reactjs.org/docs/hooks-state.html)
- 🔗 [MDN: HTMLElement.focus()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)
- 🔗 [MDN: Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- 🔗 [MDN: Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

---
