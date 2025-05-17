
---

# React Form Actions

A guide to managing forms in React using action-based state handling, including comparison with traditional approaches and practical examples.

---

## What are Form Actions?

Form actions are a declarative way to handle form submissions and their resulting state updates in React. Instead of manually managing input states, errors, and submission handlers, **form actions** encapsulate the logic into a single function that processes form data and returns updated state.

React 19+ introduces hooks like `useActionState` that simplify connecting forms to such action functions, streamlining validation and state management.

---

## Why Use Form Actions?

* **Centralized Validation & Processing**
  All validation logic and data processing happen in one place, making the code easier to maintain.

* **Automatic State Syncing**
  Returned state from the action updates the form UI (errors, field values) without manual state handling.

* **Better UX**
  Preserves user inputs and highlights errors seamlessly after form submissions.

* **Performance**
  Action functions can be declared outside the component to avoid unnecessary re-creations on renders.

---

## Traditional Form Handling (Without Form Actions)

In this approach, you manage form state and validation manually using React state hooks:

```jsx
function SignupForm() {
  const [email, setEmail] = React.useState('');
  const [errors, setErrors] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = [];

    if (!validateEmail(email)) {
      newErrors.push('Invalid email address');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      // proceed with submission
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
      />
      {errors.map(error => <div key={error}>{error}</div>)}
      <button type="submit">Sign up</button>
    </form>
  );
}
```

**Drawbacks:**

* Manually managing state for every input can get verbose.
* Complex forms require lots of boilerplate.
* Validation and state updates are fragmented between handlers and state.

---

## Using Form Actions with `useActionState`

React 19+ provides the `useActionState` hook to bind form submission to an action handler function that returns state directly:

```jsx
import { useActionState } from 'react';

function signupAction(prevState, formData) {
  const { email } = Object.fromEntries(formData.entries());
  const errors = [];

  if (!validateEmail(email)) {
    errors.push('Invalid email');
  }

  return {
    errors,
    data: { email }
  };
}

function SignupForm() {
  const [formState, formAction] = useActionState(signupAction, { errors: null, data: {} });

  return (
    <form action={formAction}>
      <input
        name="email"
        type="email"
        defaultValue={formState.data.email}
      />
      {formState.errors?.map(error => <div key={error}>{error}</div>)}
      <button type="submit">Sign up</button>
    </form>
  );
}
```

**Advantages:**

* The `signupAction` receives form data and previous state, performs validation, and returns updated errors and data.
* The hook connects this action to the form’s `action` attribute.
* Inputs use `defaultValue` from the returned state to keep values after validation.
* Cleaner, less repetitive code.
* Centralized, pure validation function that is outside the component scope for performance.

---

## Summary

| Without Form Actions                             | With Form Actions (`useActionState`)               |
| ------------------------------------------------ | -------------------------------------------------- |
| Manage state for each input with `useState`      | Centralized action function for validation & state |
| Submit handler manually reads and validates      | Action receives `FormData` and returns errors/data |
| Must manually sync input values and errors       | State updates automatically update form UI         |
| More boilerplate and state scattered across code | Cleaner, declarative, and easier to maintain       |

---

## When to Use Form Actions

* When building complex forms with many fields and validation rules.
* To improve form UX by preserving inputs and displaying errors after submission.
* To separate validation logic from component rendering.
* When you want a modern, performant, and declarative form handling pattern.

---

## Additional Resources

* [React 19 release notes](https://reactjs.org/blog/2025/04/01/react-19.html) (hypothetical link) — introduces `useActionState`.
* Validation libraries (e.g., Yup, Zod) for more complex validations.
* Official React docs on forms and hooks.

---
