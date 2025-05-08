// export default function Signup() {
//   return (
//     <form>
//       <h2>Welcome on board!</h2>
//       <p>We just need a little bit of data from you to get you started 🚀</p>

//       <div className="control">
//         <label htmlFor="email">Email</label>
//         <input id="email" type="email" name="email" />
//       </div>

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" />
//         </div>

//         <div className="control">
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input
//             id="confirm-password"
//             type="password"
//             name="confirm-password"
//           />
//         </div>
//       </div>

//       <hr />

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="first-name">First Name</label>
//           <input type="text" id="first-name" name="first-name" />
//         </div>

//         <div className="control">
//           <label htmlFor="last-name">Last Name</label>
//           <input type="text" id="last-name" name="last-name" />
//         </div>
//       </div>

//       <div className="control">
//         <label htmlFor="phone">What best describes your role?</label>
//         <select id="role" name="role">
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="employee">Employee</option>
//           <option value="founder">Founder</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <fieldset>
//         <legend>How did you find us?</legend>
//         <div className="control">
//           <input
//             type="checkbox"
//             id="google"
//             name="acquisition"
//             value="google"
//           />
//           <label htmlFor="google">Google</label>
//         </div>

//         <div className="control">
//           <input
//             type="checkbox"
//             id="friend"
//             name="acquisition"
//             value="friend"
//           />
//           <label htmlFor="friend">Referred by friend</label>
//         </div>

//         <div className="control">
//           <input type="checkbox" id="other" name="acquisition" value="other" />
//           <label htmlFor="other">Other</label>
//         </div>
//       </fieldset>

//       <div className="control">
//         <label htmlFor="terms-and-conditions">
//           <input type="checkbox" id="terms-and-conditions" name="terms" />I
//           agree to the terms and conditions
//         </label>
//       </div>

//       <p className="form-actions">
//         <button type="reset" className="button button-flat">
//           Reset
//         </button>
//         <button className="button">Sign up</button>
//       </p>
//     </form>
//   );
// }


// export default function Signup() {
//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Welcome on board!</h2>
//       <p>We just need a little bit of data from you to get you started 🚀</p>

//       <div className="control">
//         <label htmlFor="email">Email</label>
//         <input id="email" type="email" name="email" />
//       </div>

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" />
//         </div>

//         <div className="control">
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input
//             id="confirm-password"
//             type="password"
//             name="confirm-password"
//           />
//         </div>
//       </div>

//       <hr />

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="first-name">First Name</label>
//           <input type="text" id="first-name" name="first-name" />
//         </div>

//         <div className="control">
//           <label htmlFor="last-name">Last Name</label>
//           <input type="text" id="last-name" name="last-name" />
//         </div>
//       </div>

//       <div className="control">
//         <label htmlFor="phone">What best describes your role?</label>
//         <select id="role" name="role">
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="employee">Employee</option>
//           <option value="founder">Founder</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <fieldset>
//         <legend>How did you find us?</legend>
//         <div className="control">
//           <input
//             type="checkbox"
//             id="google"
//             name="acquisition"
//             value="google"
//           />
//           <label htmlFor="google">Google</label>
//         </div>

//         <div className="control">
//           <input
//             type="checkbox"
//             id="friend"
//             name="acquisition"
//             value="friend"
//           />
//           <label htmlFor="friend">Referred by friend</label>
//         </div>

//         <div className="control">
//           <input type="checkbox" id="other" name="acquisition" value="other" />
//           <label htmlFor="other">Other</label>
//         </div>
//       </fieldset>

//       <div className="control">
//         <label htmlFor="terms-and-conditions">
//           <input type="checkbox" id="terms-and-conditions" name="terms" />I
//           agree to the terms and conditions
//         </label>
//       </div>

//       <p className="form-actions">
//         <button type="reset" className="button button-flat">
//           Reset
//         </button>
//         <button className="button">Sign up</button>
//       </p>
//     </form>
//   );
// }



// export default function Signup() {
//   function signupAction(formData) {
//     const email = formData.get('email');

//     console.log(email);
//   }

//   return (
//     // action -> REACT +19
//     // call event.preventDefault itself!
//     <form action={signupAction}>
//       <h2>Welcome on board!</h2>
//       <p>We just need a little bit of data from you to get you started 🚀</p>

//       <div className="control">
//         <label htmlFor="email">Email</label>
//         <input id="email" type="email" name="email" />
//       </div>

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" />
//         </div>

//         <div className="control">
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input
//             id="confirm-password"
//             type="password"
//             name="confirm-password"
//           />
//         </div>
//       </div>

//       <hr />

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="first-name">First Name</label>
//           <input type="text" id="first-name" name="first-name" />
//         </div>

//         <div className="control">
//           <label htmlFor="last-name">Last Name</label>
//           <input type="text" id="last-name" name="last-name" />
//         </div>
//       </div>

//       <div className="control">
//         <label htmlFor="phone">What best describes your role?</label>
//         <select id="role" name="role">
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="employee">Employee</option>
//           <option value="founder">Founder</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <fieldset>
//         <legend>How did you find us?</legend>
//         <div className="control">
//           <input
//             type="checkbox"
//             id="google"
//             name="acquisition"
//             value="google"
//           />
//           <label htmlFor="google">Google</label>
//         </div>

//         <div className="control">
//           <input
//             type="checkbox"
//             id="friend"
//             name="acquisition"
//             value="friend"
//           />
//           <label htmlFor="friend">Referred by friend</label>
//         </div>

//         <div className="control">
//           <input type="checkbox" id="other" name="acquisition" value="other" />
//           <label htmlFor="other">Other</label>
//         </div>
//       </fieldset>

//       <div className="control">
//         <label htmlFor="terms-and-conditions">
//           <input type="checkbox" id="terms-and-conditions" name="terms" />I
//           agree to the terms and conditions
//         </label>
//       </div>

//       <p className="form-actions">
//         <button type="reset" className="button button-flat">
//           Reset
//         </button>
//         <button className="button">Sign up</button>
//       </p>
//     </form>
//   );
// }

// import { isEmail, isMatch, isPassordValid, hasNonEmptyValue, isNullOrWhitespace } from '../infrastructure/validation.js'

// export default function Signup() {
//   function signupAction(formData) {
//     const email = formData.get('email');

//     const password = formData.get('password');
//     const confirmPassword = formData.get('confirm-password');

//     const firstName = formData.get('first-name');
//     const lastName = formData.get('last-name');

//     const role = form.get('role');

//     const terms = formData.get('terms');

//     const acquisition = form.getAll('acquisition');

//     const errors = [];

//     if (isEmail(email) == false) {
//       errors.push('Please enter a valid email address.');
//     }

//     if (isPassordValid(password) == false) {
//       errors.push('Password must be at least 6 characters long.');
//     }

//     if (isMatch(password, confirmPassword) == false) {
//       errors.push('Passwords do not match.');
//     }

//     if (isNullOrWhitespace(firstName) || isNullOrWhitespace(lastName)) {
//       errors.push('First name and last name are required.');
//     }

//     if (isNullOrWhitespace(role)) {
//       errors.push('Please select a role.');
//     }

//     if (terms == false) {
//       errors.push('You must agree to the terms and conditions.');
//     }

//     if (hasNonEmptyValue(acquisition) == false) {
//       errors.push('Please select at least one acquisition channel.');
//     }

//     if (hasNonEmptyValue(errors)) {
//       return {
//         errors
//       };
//     }

//     console.log('Calling Api');

//     return {
//       errors: null
//     };
//   }

//   return (
//     <form action={signupAction}>
//       <h2>Welcome on board!</h2>
//       <p>We just need a little bit of data from you to get you started 🚀</p>

//       <div className="control">
//         <label htmlFor="email">Email</label>
//         <input id="email" type="email" name="email" />
//       </div>

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" />
//         </div>

//         <div className="control">
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input
//             id="confirm-password"
//             type="password"
//             name="confirm-password"
//           />
//         </div>
//       </div>

//       <hr />

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="first-name">First Name</label>
//           <input type="text" id="first-name" name="first-name" />
//         </div>

//         <div className="control">
//           <label htmlFor="last-name">Last Name</label>
//           <input type="text" id="last-name" name="last-name" />
//         </div>
//       </div>

//       <div className="control">
//         <label htmlFor="phone">What best describes your role?</label>
//         <select id="role" name="role">
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="employee">Employee</option>
//           <option value="founder">Founder</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <fieldset>
//         <legend>How did you find us?</legend>
//         <div className="control">
//           <input
//             type="checkbox"
//             id="google"
//             name="acquisition"
//             value="google"
//           />
//           <label htmlFor="google">Google</label>
//         </div>

//         <div className="control">
//           <input
//             type="checkbox"
//             id="friend"
//             name="acquisition"
//             value="friend"
//           />
//           <label htmlFor="friend">Referred by friend</label>
//         </div>

//         <div className="control">
//           <input type="checkbox" id="other" name="acquisition" value="other" />
//           <label htmlFor="other">Other</label>
//         </div>
//       </fieldset>

//       <div className="control">
//         <label htmlFor="terms-and-conditions">
//           <input type="checkbox" id="terms-and-conditions" name="terms" />I
//           agree to the terms and conditions
//         </label>
//       </div>

//       <p className="form-actions">
//         <button type="reset" className="button button-flat">
//           Reset
//         </button>
//         <button className="button">Sign up</button>
//       </p>
//     </form>
//   );
// }

// import { isEmail, isMatch, isPassordValid, hasNonEmptyValue, isNullOrWhitespace } from '../infrastructure/validation.js'

// export default function Signup() {
//   function signupAction(formData) {
//     const {
//       email,
//       password,
//       'confirm-password': confirmPassword,
//       'first-name': firstName,
//       'last-name': lastName,
//       role,
//       terms
//     } = Object.fromEntries(formData.entries());

//     const acquisition = formData.getAll('acquisition');

//     const errors = [];

//     if (isEmail(email) == false) {
//       errors.push('Please enter a valid email address.');
//     }

//     if (isPassordValid(password) == false) {
//       errors.push('Password must be at least 6 characters long.');
//     }

//     if (isMatch(password, confirmPassword) == false) {
//       errors.push('Passwords do not match.');
//     }

//     if (isNullOrWhitespace(firstName) || isNullOrWhitespace(lastName)) {
//       errors.push('First name and last name are required.');
//     }

//     if (isNullOrWhitespace(role)) {
//       errors.push('Please select a role.');
//     }

//     if (terms == false) {
//       errors.push('You must agree to the terms and conditions.');
//     }

//     if (hasNonEmptyValue(acquisition) == false) {
//       errors.push('Please select at least one acquisition channel.');
//     }

//     if (hasNonEmptyValue(errors)) {
//       return {
//         errors
//       };
//     }

//     console.log('Calling Api');

//     return {
//       errors: null
//     };
//   }

//   return (
//     <form action={signupAction}>
//       <h2>Welcome on board!</h2>
//       <p>We just need a little bit of data from you to get you started 🚀</p>

//       <div className="control">
//         <label htmlFor="email">Email</label>
//         <input id="email" type="email" name="email" />
//       </div>

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" />
//         </div>

//         <div className="control">
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input
//             id="confirm-password"
//             type="password"
//             name="confirm-password"
//           />
//         </div>
//       </div>

//       <hr />

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="first-name">First Name</label>
//           <input type="text" id="first-name" name="first-name" />
//         </div>

//         <div className="control">
//           <label htmlFor="last-name">Last Name</label>
//           <input type="text" id="last-name" name="last-name" />
//         </div>
//       </div>

//       <div className="control">
//         <label htmlFor="phone">What best describes your role?</label>
//         <select id="role" name="role">
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="employee">Employee</option>
//           <option value="founder">Founder</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <fieldset>
//         <legend>How did you find us?</legend>
//         <div className="control">
//           <input
//             type="checkbox"
//             id="google"
//             name="acquisition"
//             value="google"
//           />
//           <label htmlFor="google">Google</label>
//         </div>

//         <div className="control">
//           <input
//             type="checkbox"
//             id="friend"
//             name="acquisition"
//             value="friend"
//           />
//           <label htmlFor="friend">Referred by friend</label>
//         </div>

//         <div className="control">
//           <input type="checkbox" id="other" name="acquisition" value="other" />
//           <label htmlFor="other">Other</label>
//         </div>
//       </fieldset>

//       <div className="control">
//         <label htmlFor="terms-and-conditions">
//           <input type="checkbox" id="terms-and-conditions" name="terms" />I
//           agree to the terms and conditions
//         </label>
//       </div>

//       <p className="form-actions">
//         <button type="reset" className="button button-flat">
//           Reset
//         </button>
//         <button className="button">Sign up</button>
//       </p>
//     </form>
//   );
// }

// import { useActionState } from 'react'; // react 19+
// import { isEmail, isMatch, isTruthy, isPassordValid, hasNonEmptyValue, isNullOrWhitespace } from '../infrastructure/validation.js'

// export default function Signup() {
//   function signupAction(prevFormState, formData) {

//     const {
//       email,
//       password,
//       'confirm-password': confirmPassword,
//       'first-name': firstName,
//       'last-name': lastName,
//       role,
//       terms
//     } = Object.fromEntries(formData.entries());

//     const acquisition = formData.getAll('acquisition');

//     const errors = [];

//     if (isEmail(email) == false) {
//       errors.push('Please enter a valid email address.');
//     }

//     if (isPassordValid(password) == false) {
//       errors.push('Password must be at least 6 characters long.');
//     }

//     if (isMatch(password, confirmPassword) == false) {
//       errors.push('Passwords do not match.');
//     }

//     if (isNullOrWhitespace(firstName) || isNullOrWhitespace(lastName)) {
//       errors.push('First name and last name are required.');
//     }

//     if (isNullOrWhitespace(role)) {
//       errors.push('Please select a role.');
//     }

//     if (isTruthy(terms) == false) {
//       errors.push('You must agree to the terms and conditions.');
//     }

//     if (hasNonEmptyValue(acquisition) == false) {
//       errors.push('Please select at least one acquisition channel.');
//     }

//     return {
//       errors
//     };
//   }

//   const [formState, formAction] = useActionState(signupAction, {
//     errors: null,
//   });

//   return (
//     <form action={formAction}>
//       <h2>Welcome on board!</h2>
//       <p>We just need a little bit of data from you to get you started 🚀</p>

//       <div className="control">
//         <label htmlFor="email">Email</label>
//         <input id="email" type="email" name="email" />
//       </div>

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" />
//         </div>

//         <div className="control">
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input
//             id="confirm-password"
//             type="password"
//             name="confirm-password"
//           />
//         </div>
//       </div>

//       <hr />

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="first-name">First Name</label>
//           <input type="text" id="first-name" name="first-name" />
//         </div>

//         <div className="control">
//           <label htmlFor="last-name">Last Name</label>
//           <input type="text" id="last-name" name="last-name" />
//         </div>
//       </div>

//       <div className="control">
//         <label htmlFor="phone">What best describes your role?</label>
//         <select id="role" name="role">
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="employee">Employee</option>
//           <option value="founder">Founder</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <fieldset>
//         <legend>How did you find us?</legend>
//         <div className="control">
//           <input
//             type="checkbox"
//             id="google"
//             name="acquisition"
//             value="google"
//           />
//           <label htmlFor="google">Google</label>
//         </div>

//         <div className="control">
//           <input
//             type="checkbox"
//             id="friend"
//             name="acquisition"
//             value="friend"
//           />
//           <label htmlFor="friend">Referred by friend</label>
//         </div>

//         <div className="control">
//           <input type="checkbox" id="other" name="acquisition" value="other" />
//           <label htmlFor="other">Other</label>
//         </div>
//       </fieldset>

//       <div className="control">
//         <label htmlFor="terms-and-conditions">
//           <input type="checkbox" id="terms-and-conditions" name="terms" />I
//           agree to the terms and conditions
//         </label>
//       </div>

//       {hasNonEmptyValue(formState.errors) && (
//         <ul className='errors'>
//           {formState.errors.map((error) => (
//             <li key={error}>{error}</li>
//           ))}
//         </ul>
//       )}

//       <p className="form-actions">
//         <button type="reset" className="button button-flat">
//           Reset
//         </button>
//         <button className="button">Sign up</button>
//       </p>
//     </form>
//   );
// }


// import { useActionState } from 'react';
// import { isEmail, isMatch, isTruthy, isPassordValid, hasNonEmptyValue, isNullOrWhitespace } from '../infrastructure/validation.js'

// export default function Signup() {
//   // if you not using any specific data, you can move it out of component
//   function signupAction(prevFormState, formData) {

//     const {
//       email,
//       password,
//       'confirm-password': confirmPassword,
//       'first-name': firstName,
//       'last-name': lastName,
//       role,
//       terms
//     } = Object.fromEntries(formData.entries());

//     const acquisition = formData.getAll('acquisition');

//     const errors = [];

//     if (isEmail(email) == false) {
//       errors.push('Please enter a valid email address.');
//     }

//     if (isPassordValid(password) == false) {
//       errors.push('Password must be at least 6 characters long.');
//     }

//     if (isMatch(password, confirmPassword) == false) {
//       errors.push('Passwords do not match.');
//     }

//     if (isNullOrWhitespace(firstName) || isNullOrWhitespace(lastName)) {
//       errors.push('First name and last name are required.');
//     }

//     if (isNullOrWhitespace(role)) {
//       errors.push('Please select a role.');
//     }

//     if (isTruthy(terms) == false) {
//       errors.push('You must agree to the terms and conditions.');
//     }

//     if (hasNonEmptyValue(acquisition) == false) {
//       errors.push('Please select at least one acquisition channel.');
//     }

//     return {
//       errors,
//       data: {
//         email,
//         password,
//         confirmPassword,
//         firstName,
//         lastName,
//         role,
//         terms,
//         acquisition
//       }
//     };
//   }

//   const [formState, formAction] = useActionState(signupAction, {
//     errors: null,
//     data: {}
//   });

//   return (
//     <form action={formAction}>
//       <h2>Welcome on board!</h2>
//       <p>We just need a little bit of data from you to get you started 🚀</p>

//       <div className="control">
//         <label htmlFor="email">Email</label>
//         <input id="email" type="email" name="email" defaultValue={formState.data.email} />
//       </div>

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             defaultValue={formState.data.password}
//           />
//         </div>

//         <div className="control">
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input
//             id="confirm-password"
//             type="password"
//             name="confirm-password"
//             defaultValue={formState.data.confirmPassword}
//           />
//         </div>
//       </div>

//       <hr />

//       <div className="control-row">
//         <div className="control">
//           <label htmlFor="first-name">First Name</label>
//           <input type="text" id="first-name" name="first-name" defaultValue={formState.data.firstName} />
//         </div>

//         <div className="control">
//           <label htmlFor="last-name">Last Name</label>
//           <input type="text" id="last-name" name="last-name" defaultValue={formState.data.lastName} />
//         </div>
//       </div>

//       <div className="control">
//         <label htmlFor="phone">What best describes your role?</label>
//         <select id="role" name="role" defaultValue={formState.data.role}>
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="employee">Employee</option>
//           <option value="founder">Founder</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <fieldset>
//         <legend>How did you find us?</legend>
//         <div className="control">
//           <input
//             type="checkbox"
//             id="google"
//             name="acquisition"
//             value="google"
//             defaultChecked={formState.data.acquisition?.includes("google")}
//           />
//           <label htmlFor="google">Google</label>
//         </div>

//         <div className="control">
//           <input
//             type="checkbox"
//             id="friend"
//             name="acquisition"
//             value="friend"
//             defaultChecked={formState.data.acquisition?.includes("friend")}
//           />
//           <label htmlFor="friend">Referred by friend</label>
//         </div>

//         <div className="control">
//           <input type="checkbox" id="other" name="acquisition" value="other" defaultChecked={formState.data.acquisition?.includes("other")} />
//           <label htmlFor="other">Other</label>
//         </div>
//       </fieldset>

//       <div className="control">
//         <label htmlFor="terms-and-conditions">
//           <input type="checkbox" id="terms-and-conditions" name="terms" defaultChecked={isTruthy(formState.data.terms)} />I
//           agree to the terms and conditions
//         </label>
//       </div>

//       {hasNonEmptyValue(formState.errors) && (
//         <ul className='errors'>
//           {formState.errors.map((error) => (
//             <li key={error}>{error}</li>
//           ))}
//         </ul>
//       )}

//       <p className="form-actions">
//         <button type="reset" className="button button-flat">
//           Reset
//         </button>
//         <button className="button">Sign up</button>
//       </p>
//     </form>
//   );
// }



import { useActionState } from 'react';
import { isEmail, isMatch, isTruthy, isPassordValid, hasNonEmptyValue, isNullOrWhitespace } from '../infrastructure/validation.js'

// if you not using any specific data, you can move it out of component / Performance++ / Don't re-create on every component re-execute
function signupAction(prevFormState, formData) {

  const {
    email,
    password,
    'confirm-password': confirmPassword,
    'first-name': firstName,
    'last-name': lastName,
    role,
    terms
  } = Object.fromEntries(formData.entries());

  const acquisition = formData.getAll('acquisition');

  const errors = [];

  if (isEmail(email) == false) {
    errors.push('Please enter a valid email address.');
  }

  if (isPassordValid(password) == false) {
    errors.push('Password must be at least 6 characters long.');
  }

  if (isMatch(password, confirmPassword) == false) {
    errors.push('Passwords do not match.');
  }

  if (isNullOrWhitespace(firstName) || isNullOrWhitespace(lastName)) {
    errors.push('First name and last name are required.');
  }

  if (isNullOrWhitespace(role)) {
    errors.push('Please select a role.');
  }

  if (isTruthy(terms) == false) {
    errors.push('You must agree to the terms and conditions.');
  }

  if (hasNonEmptyValue(acquisition) == false) {
    errors.push('Please select at least one acquisition channel.');
  }

  return {
    errors,
    data: {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      role,
      terms,
      acquisition
    }
  };
}

export default function Signup() {

  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
    data: {}
  });

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" defaultValue={formState.data.email} />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={formState.data.password}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.data.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" defaultValue={formState.data.firstName} />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" defaultValue={formState.data.lastName} />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" defaultValue={formState.data.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState.data.acquisition?.includes("google")}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState.data.acquisition?.includes("friend")}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" defaultChecked={formState.data.acquisition?.includes("other")} />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" defaultChecked={isTruthy(formState.data.terms)} />I
          agree to the terms and conditions
        </label>
      </div>

      {hasNonEmptyValue(formState.errors) && (
        <ul className='errors'>
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}


