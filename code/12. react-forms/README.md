
---

# Building a Robust React Form: Step-by-Step Guide

This guide walks you through progressively improving a React login form, focusing on validation, user experience, and clean code design.

---

## Step 1: Basic Form with Manual Validation on Submit

Create a form that captures email and password values using state, and performs validation only when the user submits the form.

```jsx
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);

  function isEmailValid(value) {
    return value.includes('@') && value.trim() !== '';
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setEmailError('Please enter a valid email.');
      return;
    }

    setEmailError(null);
    console.log('Submitting:', { email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Step 2: Use Native HTML Validation with Refs

Switch to using React refs to leverage native HTML form validation attributes (`required`, `type="email"`, `minLength`, etc.).

```jsx
import { useRef } from 'react';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    if (!emailRef.current.checkValidity() || !passwordRef.current.checkValidity()) {
      alert('Please fill out the form correctly.');
      return;
    }

    console.log('Email:', emailRef.current.value);
    console.log('Password:', passwordRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" ref={emailRef} required />

      <label>Password</label>
      <input type="password" ref={passwordRef} required minLength={6} maxLength={8} />

      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Step 3: Confirm Password Matching Validation

Add a "Confirm Password" field and validate that it matches the original password.

```jsx
import { useRef, useState } from 'react';

export default function Login() {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setPasswordMismatch(true);
      return;
    }

    setPasswordMismatch(false);
    console.log('Passwords match, submitting form.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Password</label>
      <input type="password" ref={passwordRef} required minLength={6} maxLength={8} />

      <label>Confirm Password</label>
      <input type="password" ref={confirmPasswordRef} required minLength={6} maxLength={8} />

      {passwordMismatch && <p style={{ color: 'red' }}>Passwords do not match.</p>}

      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Step 4: Controlled Inputs with Validation on Blur

Use controlled components and track whether inputs have been touched to show validation errors only after user interaction.

```jsx
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });

  const emailIsValid = email.includes('@');
  const passwordIsValid = password.trim().length >= 6;

  function handleBlur(field) {
    setTouched(prev => ({ ...prev, [field]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailIsValid || !passwordIsValid) return;
    console.log({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onBlur={() => handleBlur('email')}
      />
      {touched.email && !emailIsValid && <p style={{ color: 'red' }}>Invalid email!</p>}

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        onBlur={() => handleBlur('password')}
      />
      {touched.password && !passwordIsValid && (
        <p style={{ color: 'red' }}>Password must be at least 6 characters.</p>
      )}

      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Step 5: Extract Validation Logic & Reusable Input Component

Create a reusable `Input` component and separate validation utilities for cleaner code.

```jsx
// validation.js
export function isEmail(value) {
  return value.includes('@') && value.trim() !== '';
}

export function hasMinLength(value, length) {
  return value.trim().length >= length;
}
```

```jsx
// Input.jsx
export default function Input({ label, type, value, onChange, onBlur, error }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} onBlur={onBlur} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
```

```jsx
import { useState } from 'react';
import Input from './Input.jsx';
import { isEmail, hasMinLength } from './validation.js';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });

  const emailIsValid = isEmail(email);
  const passwordIsValid = hasMinLength(password, 6);

  function handleBlur(field) {
    setTouched(prev => ({ ...prev, [field]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailIsValid || !passwordIsValid) return;
    console.log({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onBlur={() => handleBlur('email')}
        error={touched.email && !emailIsValid ? 'Invalid email!' : null}
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        onBlur={() => handleBlur('password')}
        error={touched.password && !passwordIsValid ? 'Password too short!' : null}
      />

      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Step 6: Custom `useInput` Hook for Reusable Form Logic

Encapsulate input state and validation logic inside a custom hook for cleaner, reusable code.

```jsx
import { useState } from 'react';

export function useInput(defaultValue, validateFn) {
  const [value, setValue] = useState(defaultValue);
  const [touched, setTouched] = useState(false);

  const isValid = validateFn(value);
  const hasError = touched && !isValid;

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleBlur() {
    setTouched(true);
  }

  function reset() {
    setValue(defaultValue);
    setTouched(false);
  }

  return {
    value,
    isValid,
    hasError,
    handleChange,
    handleBlur,
    reset,
  };
}
```

Usage in the form component:

```jsx
import Input from './Input.jsx';
import { useInput } from './useInput.js';
import { isEmail, hasMinLength } from './validation.js';

export default function Login() {
  const emailInput = useInput('', isEmail);
  const passwordInput = useInput('', value => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();

    if (emailInput.hasError || passwordInput.hasError) {
      return;
    }

    console.log('Email:', emailInput.value);
    console.log('Password:', passwordInput.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="text"
        value={emailInput.value}
        onChange={emailInput.handleChange}
        onBlur={emailInput.handleBlur}
        error={emailInput.hasError ? 'Invalid email!' : null}
      />

      <Input
        label="Password"
        type="password"
        value={passwordInput.value}
        onChange={passwordInput.handleChange}
        onBlur={passwordInput.handleBlur}
        error={passwordInput.hasError ? 'Password too short!' : null}
      />

      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Summary

* Start with simple validation on submit using state
* Use native HTML5 validation for quick improvements
* Add custom validations like password confirmation
* Enhance UX with controlled inputs and validation on blur
* Separate concerns with reusable components and validation functions
* Encapsulate logic in custom hooks for cleaner, reusable code

This approach results in a scalable, user-friendly React form.

---
