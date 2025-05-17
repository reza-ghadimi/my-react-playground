// **************************************************
// A-01: Basic static login form with no logic or interactivity.
// **************************************************
// export default function Login() {
//   return (
//     <form>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input id="email" type="email" name="email" />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-02: Added click handlers for login and reset buttons that log messages.
// **************************************************
// export default function Login() {

//   // Send Http Request due to the usage of <form></form> and button type (submit by default)
//   function handleSubmit(event) {
//     // always log submit event when the email is not in a valid format
//     console.log("Submit");
//   }

//   // Send Http Request due to the usage of <form></form> and button type (submit by default)
//   function handleReset(event) {
//     console.log("Reset");
//   }

//   return (
//     <form>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input id="email" type="email" name="email" />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" onClick={handleReset}>Reset</button>
//         <button className="button" onClick={handleSubmit}>Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-03: Prevented form submission by setting login button type="button".
// **************************************************
// export default function Login() {

//   // do not Send Http Request due to the button type button
//   function handleSubmit(event) {
//     // always log submit event when the email is not in a valid format
//     console.log("Submit");
//   }

//   // Send Http Request due to the usage of <form></form> and button type (submit by default)
//   function handleReset(event) {
//     console.log("Reset");
//   }

//   return (
//     <form>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input id="email" type="email" name="email" />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" onClick={handleReset}>Reset</button>
//         <button type="button" className="button" onClick={handleSubmit}>Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-04: Prevented default form submission using event.preventDefault() in the login handler.
// **************************************************
// export default function Login() {

//   // do not Send Http Request when the email is not in a valid format
//   function handleSubmit(event) {
//     event.preventDefault();

//     // do not log submit event when the email is not in a valid format
//     console.log("Submit");
//   }

//   // Send Http Request due to the usage of <form></form> and button type (submit by default)
//   function handleReset(event) {
//     console.log("Reset");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input id="email" type="email" name="email" />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" onClick={handleReset}>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-05: Introduced useState to manage input values and reset them to empty strings.
// **************************************************
// import { useState } from "react";

// export default function Login() {

//   const [password, setPassword] = useState(null);
//   const [emailAddress, setEmailAddress] = useState(null);

//   // do not Send Http Request when the email is not in a valid format
//   function handleSubmit(event) {
//     event.preventDefault();

//     // do not log submit event when the email is not in a valid format
//     console.log(`Submit - Email Address: ${emailAddress} - Password: ${password}`);
//   }

//   // Send Http Request due to the usage of <form></form> and button type (submit by default)
//   function handleReset(event) {
//     // this does not update input text!
//     // setPassword(null);
//     // setEmailAddress(null);

//     setPassword('');
//     setEmailAddress('');

//     // Also comment handleSubmit because the type of reset button (submit)!
//     console.log(`Reset  (set values equal to '') - Email Address: ${emailAddress} - Password: ${password}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             value={emailAddress}
//             onChange={(event) => setEmailAddress(event.target.value)}
//           />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" onClick={handleReset}>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-06: Combined email and password state into a single state object for better management.
// **************************************************
// import { useState } from "react";

// export default function Login() {

//   const [enteredValues, setEnteredValues] = useState({
//     password: null,
//     emailAddress: null,
//   });

//   // do not Send Http Request when the email is not in a valid format
//   function handleSubmit(event) {
//     event.preventDefault();

//     // do not log submit event when the email is not in a valid format
//     console.log(`Submit - Email Address: ${enteredValues.emailAddress} - Password: ${enteredValues.password}`);
//   }

//   function handleReset(event) {
//     // does not work!
//     // setEnteredValues({
//     //   password: null,
//     //   emailAddress: null,
//     // });

//     setEnteredValues({
//       password: '',
//       emailAddress: '',
//     });

//     console.log(`Reset - Email Address: ${enteredValues.emailAddress} - Password: ${enteredValues.password}`);
//   }

//   function handleSetEnteredValues(identifier, value) {
//     setEnteredValues(prevValues => ({
//       ...prevValues,
//       [identifier]: value
//     }));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             value={enteredValues.emailAddress}
//             onChange={(event) => handleSetEnteredValues("emailAddress", event.target.value)}
//           />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             value={enteredValues.password}
//             onChange={(event) => handleSetEnteredValues("password", event.target.value)}
//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" type='button' onClick={handleReset}>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-07: Switched from state-based inputs to useRef for uncontrolled components.
// **************************************************
// import { useRef } from "react";

// export default function Login() {

//   const passwordRef = useRef();
//   const emailAddressRef = useRef();

//   // do not Send Http Request when the email is not in a valid format
//   function handleSubmit(event) {
//     event.preventDefault();

//     // do not log submit event when the email is not in a valid format
//     console.log(`Submit - Email Address: ${emailAddressRef.current.value} - Password: ${passwordRef.current.value}`);
//   }

//   function handleReset(event) {
//     passwordRef.current.value = null;
//     emailAddressRef.current.value = null;

//     console.log(`Reset - Email Address: ${emailAddressRef.current.value} - Password: ${passwordRef.current.value}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             ref={emailAddressRef}
//           />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             ref={passwordRef}
//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" type='button' onClick={handleReset}>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-08: Simplified reset functionality using the native reset button type.
// **************************************************
// import { useRef } from "react";

// export default function Login() {

//   const passwordRef = useRef();
//   const emailAddressRef = useRef();

//   // do not Send Http Request when the email is not in a valid format
//   function handleSubmit(event) {
//     event.preventDefault();

//     // do not log submit event when the email is not in a valid format
//     console.log(`Submit - Email Address: ${emailAddressRef.current.value} - Password: ${passwordRef.current.value}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             ref={emailAddressRef}
//           />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             ref={passwordRef}
//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" type='reset'>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-09: Added basic email validation with an inline error message.
// **************************************************
// import { useState } from "react";

// export default function Login() {

//   function isNullOrWhitespace(value) {
//     const hasValue = value?.trim() == null || value?.trim() == undefined || value?.trim() == '';

//     return hasValue;
//   }

//   const [enteredValues, setEnteredValues] = useState({
//     password: '',
//     emailAddress: '',
//   });

//   const isEmailValid =
//     isNullOrWhitespace(enteredValues.emailAddress) == false &&
//     enteredValues.emailAddress?.includes("@");

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   function handleReset(event) {
//     setEnteredValues({
//       password: '',
//       emailAddress: '',
//     });
//   }

//   function handleSetEnteredValues(identifier, value) {
//     setEnteredValues(prevValues => ({
//       ...prevValues,
//       [identifier]: value
//     }));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             value={enteredValues.emailAddress}
//             onChange={(event) => handleSetEnteredValues("emailAddress", event.target.value)}
//           />

//           <div className="control-error">
//             {isEmailValid == false && <p>Please enter a valid email address!</p>}
//           </div>
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             value={enteredValues.password}
//             onChange={(event) => handleSetEnteredValues("password", event.target.value)}
//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" type='button' onClick={handleReset}>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-10: Implemented "dirty" state tracking to show validation errors only after user interaction.
// **************************************************
// import { useState } from "react";

// export default function Login() {

//   function isNullOrWhitespace(value) {
//     const hasValue = value?.trim() == null || value?.trim() == undefined || value?.trim() == '';

//     return hasValue;
//   }

//   const [enteredValues, setEnteredValues] = useState({
//     password: '',
//     emailAddress: '',
//   });

//   const [didEdit, setDidEdit] = useState({
//     password: false,
//     emailAddress: false,
//   })

//   const isEmailValid = (didEdit.password == false) ||
//     (isNullOrWhitespace(enteredValues.emailAddress) == false && enteredValues.emailAddress?.includes("@"));

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   function handleReset(event) {
//     setEnteredValues({
//       password: '',
//       emailAddress: '',
//     });

//     setDidEdit({
//       password: false,
//       emailAddress: false,
//     });
//   }

//   function handleInputBlur(identifier) {
//     setDidEdit(prevValues => ({
//       ...prevValues,
//       [identifier]: true
//     }));
//   }

//   function handleSetEnteredValues(identifier, value) {
//     setEnteredValues(prevValues => ({
//       ...prevValues,
//       [identifier]: value
//     }));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             value={enteredValues.emailAddress}
//             onBlur={() => handleInputBlur("emailAddress")}
//             onChange={(event) => handleSetEnteredValues("emailAddress", event.target.value)}
//           />

//           <div className="control-error">
//             {isEmailValid == false && <p>Please enter a valid email address!</p>}
//           </div>
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             value={enteredValues.password}
//             onBlur={() => handleInputBlur("password")}
//             onChange={(event) => handleSetEnteredValues("password", event.target.value)}
//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" type='button' onClick={handleReset}>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-11: Replaced blur tracking with a final validation check inside handleSubmit.
// **************************************************
// import { useState } from "react";

// export default function Login() {

//   function isNullOrWhitespace(value) {
//     const hasValue = value?.trim() == null || value?.trim() == undefined || value?.trim() == '';

//     return hasValue;
//   }

//   const [isEmailValid, setIsEmailValid] = useState(true);

//   const [enteredValues, setEnteredValues] = useState({
//     password: '',
//     emailAddress: '',
//   });

//   function handleSubmit(event) {
//     event.preventDefault();

//     const emailValid =
//       (isNullOrWhitespace(enteredValues.emailAddress) == false) &&
//       enteredValues.emailAddress?.includes("@");

//     if (emailValid == false) {
//       setIsEmailValid(false);
//       return;
//     }

//     setIsEmailValid(true);

//     console.log('Sending Http request...');
//   }

//   function handleReset(event) {
//     setEnteredValues({
//       password: '',
//       emailAddress: '',
//     });

//     setIsEmailValid(true);
//   }

//   function handleSetEnteredValues(identifier, value) {
//     setEnteredValues(prevValues => ({
//       ...prevValues,
//       [identifier]: value
//     }));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             // type="email"
//             name="email"
//             value={enteredValues.emailAddress}
//             onChange={(event) => handleSetEnteredValues("emailAddress", event.target.value)}
//           />

//           <div className="control-error">
//             {isEmailValid == false && <p>Please enter a valid email address!</p>}
//           </div>
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             value={enteredValues.password}
//             onChange={(event) => handleSetEnteredValues("password", event.target.value)}
//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" type='reset' onClick={handleReset}>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-12: Introduced useRef to directly access form input values without state.
// **************************************************
// import { useRef } from "react";

// export default function Login() {

//   const passwordRef = useRef();
//   const emailAddressRef = useRef();

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             required
//             ref={emailAddressRef}
//           />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             required
//             minLength={6}
//             maxLength={8}
//             ref={passwordRef}
//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" type='reset'>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-13: Added password confirmation validation comparing password and confirm password inputs using refs and state.
// **************************************************
// import { useRef, useState } from "react";

// export default function Login() {

//   const passwordRef = useRef(null);
//   const emailAddressRef = useRef(null);
//   const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

//   function handleSubmit(event) {
//     event.preventDefault();

//     const password = passwordRef.current?.value;

//     const data = new FormData(event.target);
//     const confirmPassword = data.get('confirm-password');

//     console.log(`Password: ${password} - Confirm Password: ${confirmPassword}`);

//     if (password != confirmPassword) {
//       setPasswordsAreNotEqual(true);

//       return;
//     }

//     setPasswordsAreNotEqual(false);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             required
//             ref={emailAddressRef}
//           />
//         </div>
//       </div>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             required
//             minLength={6}
//             maxLength={8}
//             ref={passwordRef}
//           />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input
//             id="confirm-password"
//             type="password"
//             name="confirm-password"
//             required
//             minLength={6}
//             maxLength={8}
//           />

//           <div className="control-error">
//             {passwordsAreNotEqual && <p>Confirm password must be equal to Password!</p>}
//           </div>
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" type='reset'>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-14: Implemented input-level validation on blur and change events with state tracking for touched inputs.
// **************************************************
// import { useState } from 'react';

// import Input from './Input.jsx';

// export default function Login() {
//   const [enteredValues, setEnteredValues] = useState({
//     email: '',
//     password: '',
//   });

//   const [didEdit, setDidEdit] = useState({
//     email: false,
//     password: false,
//   });

//   const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
//   const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

//   function handleReset() {
//     setEnteredValues({
//       email: '',
//       password: '',
//     });

//     setDidEdit({
//       email: false,
//       password: false,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     console.log(enteredValues);
//   }

//   function handleInputChange(identifier, value) {
//     setEnteredValues((prevValues) => ({
//       ...prevValues,
//       [identifier]: value,
//     }));

//     setDidEdit((prevEdit) => ({
//       ...prevEdit,
//       [identifier]: false,
//     }));
//   }

//   function handleInputBlur(identifier) {
//     setDidEdit((prevEdit) => ({
//       ...prevEdit,
//       [identifier]: true,
//     }));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <Input
//           id="email"
//           type="email"
//           name="email"
//           label="Email"
//           error={emailIsInvalid && 'Please enter a valid email!'}

//           value={enteredValues.email}
//           onBlur={() => handleInputBlur('email')}
//           onChange={(event) => handleInputChange('email', event.target.value)}
//         />

//         <Input
//           id="password"
//           type="password"
//           name="password"
//           label="Password"
//           error={passwordIsInvalid && 'Please enter a valid password!'}

//           value={enteredValues.password}
//           onBlur={() => handleInputBlur('password')}
//           onChange={(event) => handleInputChange('password', event.target.value)}
//         />
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" type="reset" onClick={handleReset}>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-15: Enhanced validation by importing reusable validation helpers and conditionally showing error messages.
// **************************************************
// import { useState } from 'react';

// import Input from './Input.jsx';
// import { isEmail, isNotEmpty, hasMinLength } from '../infrastructure/validation.js';

// export default function Login() {
//   const [enteredValues, setEnteredValues] = useState({
//     email: '',
//     password: '',
//   });

//   const [didEdit, setDidEdit] = useState({
//     email: false,
//     password: false,
//   });

//   const emailIsInvalid =
//     didEdit.email &&
//     (!isEmail(enteredValues.email) || !isNotEmpty(enteredValues.email));

//   const passwordIsInvalid =
//     didEdit.password && !hasMinLength(enteredValues.password, 6);

//   function handleReset() {
//     setEnteredValues({
//       email: '',
//       password: '',
//     });

//     setDidEdit({
//       email: false,
//       password: false,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     console.log(enteredValues);
//   }

//   function handleInputChange(identifier, value) {
//     setEnteredValues((prevValues) => ({
//       ...prevValues,
//       [identifier]: value,
//     }));

//     setDidEdit((prevEdit) => ({
//       ...prevEdit,
//       [identifier]: false,
//     }));
//   }

//   function handleInputBlur(identifier) {
//     setDidEdit((prevEdit) => ({
//       ...prevEdit,
//       [identifier]: true,
//     }));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <Input
//           id="email"
//           // type="email"
//           name="email"
//           label="Email"
//           error={emailIsInvalid && 'Please enter a valid email!'}

//           value={enteredValues.email}
//           onBlur={() => handleInputBlur('email')}
//           onChange={(event) => handleInputChange('email', event.target.value)}
//         />

//         <Input
//           id="password"
//           type="password"
//           name="password"
//           label="Password"
//           error={passwordIsInvalid && 'Please enter a valid password!'}

//           value={enteredValues.password}
//           onBlur={() => handleInputBlur('password')}
//           onChange={(event) => handleInputChange('password', event.target.value)}
//         />
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" type="reset" onClick={handleReset}>Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
// **************************************************

// **************************************************
// A-16: Refactored validation logic using a custom useInput hook for cleaner state and validation management.
// **************************************************
import Input from './Input.jsx';
import { useInput } from '../hooks/useInput.js';
import { isEmail, isNotEmpty, hasMinLength } from '../infrastructure/validation.js';

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  function handleReset() {
    useInput('', (value) => hasMinLength(value, 6));
    useInput('', (value) => isEmail(value) && isNotEmpty(value));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset" onClick={handleReset}>Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
// **************************************************