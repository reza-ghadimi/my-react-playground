
---

### 1. **Module Introduction** 📦
A module in programming refers to a self-contained unit of code that can be reused across different parts of an application. In the context of React, a module often refers to a set of components, hooks, or utility functions that perform a specific task. Modules help improve code organization, readability, and maintainability by breaking down an application into smaller, manageable parts.

---

### 2. **You Don't Have To Use JSX!** 🚫📜
JSX is a syntax extension for JavaScript that looks similar to HTML and is commonly used in React to define UI components. However, JSX is optional in React. You can use pure JavaScript with `React.createElement` to create elements without JSX. JSX is just syntactic sugar for `React.createElement` calls and does not affect the functionality of React.

Example without JSX:
```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

---

### 3. **Working with Fragments** 💎
A **Fragment** in React is a wrapper component that allows you to group multiple elements without introducing an additional node to the DOM. This is useful when you need to return multiple elements from a component but don't want to add unnecessary wrapper elements like `div`.

Example:
```jsx
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

---

### 4. **When Should You Split Components?** 🤔
Splitting components should be done when a single component becomes too large, complex, or hard to manage. It is often beneficial to split components when:
- A component starts handling too many responsibilities.
- You want to make a component reusable in other parts of your application.
- The component’s state or logic becomes complicated.

By splitting components, you enhance maintainability and improve the scalability of your code.

---

### 5. **Splitting Components By Feature & State** ⚙️
When splitting components, it's useful to think about **features** and **state**. For example:
- **Feature-based splitting** divides components by distinct features (e.g., navigation, forms, user authentication).
- **State-based splitting** keeps related state together within components to prevent unnecessary re-renders and improve performance.

This approach ensures components remain focused on specific functionality, making them easier to manage.

---

### 6. **Problem: Props Are Not Forwarded To Inner Elements** 🚧
In React, when a parent component passes props to its child components, those props aren’t automatically forwarded to deeply nested child elements unless explicitly handled. This can cause issues when components need to receive certain props to work correctly.

---

### 7. **Forwarding Props To Wrapped Elements** 🔄
To forward props to wrapped elements, React provides a `forwardRef` API. This allows props to be passed from a parent component to a child element, including when the child is wrapped inside other components or higher-order components (HOCs).

Example:
```jsx
const MyComponent = React.forwardRef((props, ref) => (
  <div ref={ref} {...props}>
    {props.children}
  </div>
));
```
This ensures that props reach the correct component.

---

### 8. **Working with Multiple JSX Slots** 📦🧩
In React, you can have multiple slots (areas) in your component where dynamic content can be injected. These "slots" allow for flexibility in rendering different content inside your component. This is often done using **children** or **props** to pass content to the desired area.

Example:
```jsx
const Layout = ({ header, content, footer }) => (
  <div>
    <header>{header}</header>
    <main>{content}</main>
    <footer>{footer}</footer>
  </div>
);
```

---

### 9. **Setting Component Types Dynamically** 🔄
You may want to dynamically change the type of a component based on props or application logic. This can be done by rendering different components or elements based on conditions.

Example:
```jsx
const Button = ({ type }) => {
  const Component = type === 'link' ? 'a' : 'button';
  return <Component>{children}</Component>;
};
```

---

### 10. **Setting Default Prop Values** 🔧
In React, you can define **default values** for props to ensure a component has a fallback value when a prop is not provided. This helps in preventing errors when the parent component doesn't supply certain props.

You can set default values using `defaultProps` or by using destructuring with default values in the function signature.

Example:
```jsx
const MyComponent = ({ text = 'Default Text' }) => <p>{text}</p>;

MyComponent.defaultProps = {
  text: 'Fallback Text'
};
```