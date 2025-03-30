// **************************************************
// STEP-01: Initial Setup and Basic App Structure
// **************************************************
// // Importing the necessary styles for the application
// import './App.css'

// function App() {
//     return (
//         <div>
//             <div>
//                 <a href='https://vite.dev' target='_blank'>
//                     <img src='vite.svg' className='logo' alt='Vite logo' />
//                 </a>
//                 <a href='https://react.dev' target='_blank'>
//                     <img src='src/assets/react.svg' className='logo react' alt='React logo' />
//                 </a>
//             </div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 Click on the Vite and React logos to learn more
//             </p>
//         </div>
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-02: Refactoring the Code by Creating a Reusable LogoContainer Component
// **************************************************
// import './App.css'

// function LogoContainer() {
//     return (
//         <div>
//             <a href='https://vite.dev' target='_blank'>
//                 <img src='vite.svg' className='logo' alt='Vite logo' />
//             </a>
//             <a href='https://react.dev' target='_blank'>
//                 <img src='src/assets/react.svg' className='logo react' alt='React logo' />
//             </a>
//         </div>
//     )
// }

// function IntroContainer() {
//     return (
//         <div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 Click on the Vite and React logos to learn more
//             </p>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <LogoContainer />
//             <IntroContainer />
//         </div>
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-03: Enhancing the IntroContainer with Random Description Display
// **************************************************
// import './App.css'

// const introDescriptions = [
//     'Click on the Vite and React logos to learn more',
//     'Click the Vite and React logos to dive deeper.',
//     'Explore Vite and React by clicking on their logos.',
//     'Discover more about Vite and React by clicking the logos.',
//     'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//     let number = Math.floor(Math.random() * max);

//     return number;
// }

// function LogoContainer() {
//     return (
//         <div>
//             <a href='https://vite.dev' target='_blank'>
//                 <img src='vite.svg' className='logo' alt='Vite logo' />
//             </a>
//             <a href='https://react.dev' target='_blank'>
//                 <img src='src/assets/react.svg' className='logo react' alt='React logo' />
//             </a>
//         </div>
//     )
// }

// function IntroContainer() {
//     return (
//         <div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 {introDescriptions[generateRandomNumber(5)]}
//             </p>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <LogoContainer />
//             <IntroContainer />
//         </div>
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-04: Refactoring to Store Random Description in a Variable
// **************************************************
// import './App.css'

// const introDescriptions = [
//     'Click on the Vite and React logos to learn more',
//     'Click the Vite and React logos to dive deeper.',
//     'Explore Vite and React by clicking on their logos.',
//     'Discover more about Vite and React by clicking the logos.',
//     'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//     let number = Math.floor(Math.random() * max);

//     return number;
// }

// const description = introDescriptions[generateRandomNumber(introDescriptions.length)];

// function LogoContainer() {
//     return (
//         <div>
//             <a href='https://vite.dev' target='_blank'>
//                 <img src='vite.svg' className='logo' alt='Vite logo' />
//             </a>
//             <a href='https://react.dev' target='_blank'>
//                 <img src='src/assets/react.svg' className='logo react' alt='React logo' />
//             </a>
//         </div>
//     )
// }

// function IntroContainer() {
//     return (
//         <div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 {description}
//             </p>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <LogoContainer />
//             <IntroContainer />
//         </div>
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-05: Refactoring to Use Proper Asset Imports and Component Structure
// **************************************************
// import './App.css'

// // Importing the assets (logos) required for the LogoContainer component
// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

// const introDescriptions = [
//     'Click on the Vite and React logos to learn more',
//     'Click the Vite and React logos to dive deeper.',
//     'Explore Vite and React by clicking on their logos.',
//     'Discover more about Vite and React by clicking the logos.',
//     'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//     let number = Math.floor(Math.random() * max);

//     return number;
// }

// const description = introDescriptions[
//     generateRandomNumber(introDescriptions.length)
// ];

// function LogoContainer() {
//     return (
//         <div className='logo-container'>
//             <a href='https://vite.dev' target='_blank'>
//                 <img src={viteLogo} className='logo' alt='Vite logo' />
//                 <p className='logo-text'>
//                     Vite
//                 </p>
//             </a>
//             <a href='https://react.dev' target='_blank'>
//                 <img src={reactLogo} className='logo react' alt='React logo' />

//                 <p className='logo-text'>
//                     React
//                 </p>
//             </a>
//         </div>
//     )
// }

// function IntroContainer() {
//     return (
//         <div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 {description}
//             </p>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <LogoContainer />
//             <IntroContainer />
//         </div>
//     )
// }

// export default App
// **************************************************

// // **************************************************
// // STEP-06: Introducing Props for Reusability
// // **************************************************
// import './App.css'

// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

// const introDescriptions = [
//     'Click on the Vite and React logos to learn more',
//     'Click the Vite and React logos to dive deeper.',
//     'Explore Vite and React by clicking on their logos.',
//     'Discover more about Vite and React by clicking the logos.',
//     'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//     let number = Math.floor(Math.random() * max);

//     return number;
// }

// const description = introDescriptions[
//     generateRandomNumber(introDescriptions.length)
// ];

// // props is simply a regular JavaScript object containing all the values you pass to a React component.
// // It allows your components to be dynamic and reusable with different values for each usage.
// function LogoCard(props) {
//     return (
//         <a href={props.link} target='_blank'>
//             <img src={props.logo} className='logo' alt={props.title} />

//             <p className='logo-text'>
//                 {props.title}
//             </p>
//         </a>
//     )
// }

// function IntroContainer() {
//     return (
//         <div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 {description}
//             </p>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <div className='logo-container'>
//                 <LogoCard
//                     title='Vite'
//                     link='https://vite.dev'
//                     logo={viteLogo}
//                 />

//                 <LogoCard
//                     title='React'
//                     link='https://react.dev'
//                     logo={reactLogo}
//                 />
//             </div>
//             <IntroContainer />
//         </div >
//     )
// }

// export default App
// // **************************************************


// **************************************************
// STEP-07: Changing props Name for Demonstration
// **************************************************
// import './App.css'

// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

// const introDescriptions = [
//     'Click on the Vite and React logos to learn more',
//     'Click the Vite and React logos to dive deeper.',
//     'Explore Vite and React by clicking on their logos.',
//     'Discover more about Vite and React by clicking the logos.',
//     'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//     let number = Math.floor(Math.random() * max);

//     return number;
// }

// const description = introDescriptions[
//     generateRandomNumber(introDescriptions.length)
// ];

// // props is just an argument, you can name it blah blah!
// function LogoCard(blahBlah) {
//     return (
//         <a href={blahBlah.link} target='_blank'>
//             <img src={blahBlah.logo} className='logo' alt={blahBlah.title} />

//             <p className='logo-text'>
//                 {blahBlah.title}
//             </p>
//         </a>
//     )
// }

// function IntroContainer() {
//     return (
//         <div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 {description}
//             </p>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <div className='logo-container'>
//                 <LogoCard
//                     title='Vite'
//                     link='https://vite.dev'
//                     logo={viteLogo}
//                 />

//                 <LogoCard
//                     title='React'
//                     link='https://react.dev'
//                     logo={reactLogo}
//                 />
//             </div>
//             <IntroContainer />
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-08: Using an External Data File (data.js) for Better Maintainability
// **************************************************
// import './App.css'

// import { LOGOS_DATA } from './data.js'

// const introDescriptions = [
//     'Click on the Vite and React logos to learn more',
//     'Click the Vite and React logos to dive deeper.',
//     'Explore Vite and React by clicking on their logos.',
//     'Discover more about Vite and React by clicking the logos.',
//     'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//     let number = Math.floor(Math.random() * max);

//     return number;
// }

// const description = introDescriptions[
//     generateRandomNumber(introDescriptions.length)
// ];

// // props is just an argument, you can name it blah blah!
// function LogoCard(props) {
//     return (
//         <a href={props.link} target='_blank'>
//             <img src={props.logo} className='logo' alt={props.title} />

//             <p className='logo-text'>
//                 {props.title}
//             </p>
//         </a>
//     )
// }

// function IntroContainer() {
//     return (
//         <div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 {description}
//             </p>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <div className='logo-container'>
//                 <LogoCard
//                     title={LOGOS_DATA[0].title}
//                     link={LOGOS_DATA[0].link}
//                     logo={LOGOS_DATA[0].logo}
//                 />

//                 <LogoCard
//                     title={LOGOS_DATA[1].title}
//                     link={LOGOS_DATA[1].link}
//                     logo={LOGOS_DATA[1].logo}
//                 />

//                 {
//                     /* <LogoCard
//                         title={LOGOS_DATA[2].title}
//                         link={LOGOS_DATA[2].link}
//                         logo={LOGOS_DATA[2].logo}
//                     />


//                     <LogoCard
//                         title={LOGOS_DATA[3].title}
//                         link={LOGOS_DATA[3].link}
//                         logo={LOGOS_DATA[3].logo}
//                     /> 

//                     <LogoCard
//                         title={LOGOS_DATA[4].title}
//                         link={LOGOS_DATA[4].link}
//                         logo={LOGOS_DATA[4].logo}
//                     />*/
//                 }
//             </div>
//             <IntroContainer />
//         </div >
//     )
// }

// export default App
// **************************************************


// **************************************************
// STEP-09: Using the Spread Operator (...) Instead of Explicit Props
// **************************************************
// import './App.css'

// import { LOGOS_DATA } from './data.js'

// const introDescriptions = [
//     'Click on the Vite and React logos to learn more',
//     'Click the Vite and React logos to dive deeper.',
//     'Explore Vite and React by clicking on their logos.',
//     'Discover more about Vite and React by clicking the logos.',
//     'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//     let number = Math.floor(Math.random() * max);

//     return number;
// }

// const description = introDescriptions[
//     generateRandomNumber(introDescriptions.length)
// ];

// function LogoCard(props) {
//     return (
//         <a href={props.link} target='_blank'>
//             <img src={props.logo} className='logo' alt={props.title} />

//             <p className='logo-text'>
//                 {props.title}
//             </p>
//         </a>
//     )
// }

// function IntroContainer() {
//     return (
//         <div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 {description}
//             </p>
//         </div>
//     );
// }

// function App() {
//     return (
//         // Since LOGOS_DATA is an array of objects with the same keys (title, link, logo) that LogoContainer expects
//         <div>
//             <div className='logo-container'>
//                 <LogoCard  {...LOGOS_DATA[0]} />
//                 <LogoCard  {...LOGOS_DATA[1]} />
//                 {/* <LogoCard  {...LOGOS_DATA[2]} />
//                 <LogoCard  {...LOGOS_DATA[3]} />
//                 <LogoCard  {...LOGOS_DATA[4]} /> */}
//             </div>
//             <IntroContainer />
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-10: Destructured Props
// **************************************************
// import './App.css'

// import { LOGOS_DATA } from './data.js'

// const introDescriptions = [
//     'Click on the Vite and React logos to learn more',
//     'Click the Vite and React logos to dive deeper.',
//     'Explore Vite and React by clicking on their logos.',
//     'Discover more about Vite and React by clicking the logos.',
//     'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//     let number = Math.floor(Math.random() * max);

//     return number;
// }

// const description = introDescriptions[
//     generateRandomNumber(introDescriptions.length)
// ];

// function LogoCard({ title, link, logo }) {
//     return (
//         <a href={link} target='_blank'>
//             <img src={logo} className='logo' alt={title} />

//             <p className='logo-text'>
//                 {title}
//             </p>
//         </a>
//     )
// }

// function IntroContainer() {
//     return (
//         <div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 {description}
//             </p>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <div className='logo-container'>
//                 <LogoCard
//                     title={LOGOS_DATA[0].title}
//                     link={LOGOS_DATA[0].link}
//                     logo={LOGOS_DATA[0].logo}
//                 />
//                 <LogoCard  {...LOGOS_DATA[1]} />
//             </div>
//             <IntroContainer />
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-11: Use .map() Instead of Manually Listing Components
// **************************************************
// import './App.css'

// import { LOGOS_DATA } from './data.js'

// const introDescriptions = [
//     'Click on the Vite and React logos to learn more',
//     'Click the Vite and React logos to dive deeper.',
//     'Explore Vite and React by clicking on their logos.',
//     'Discover more about Vite and React by clicking the logos.',
//     'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//     let number = Math.floor(Math.random() * max);

//     return number;
// }

// const description = introDescriptions[
//     generateRandomNumber(introDescriptions.length)
// ];

// function LogoCard({ title, link, logo }) {
//     return (
//         <a href={link} target='_blank'>
//             <img src={logo} className='logo' alt={title} />

//             <p className='logo-text'>
//                 {title}
//             </p>
//         </a>
//     )
// }

// function IntroContainer() {
//     return (
//         <div>
//             <h1>Vite + React</h1>
//             <p className='read-the-docs'>
//                 {description}
//             </p>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <div className='logo-container'>
//                 {LOGOS_DATA.map((logo, index) => (
//                     <LogoCard key={index} {...logo} />
//                 ))}
//             </div>
//             <IntroContainer />
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-12: Encapsulates logic (Each component is in its own file (components -> IntroContainer.jsx and LogoCard.jsx)).
// Uncomment components/IntroContainer.jsx and components/LogoCard.jsx
// **************************************************
// import './App.css'
// import { LOGOS_DATA } from './data.js'
// import LogoCard from './components/LogoCard.jsx'
// import IntroContainer from './components/IntroContainer.jsx'

// function App() {
//     return (
//         <div>
//             <div className='logo-container'>
//                 {LOGOS_DATA.map((logo, index) => (
//                     <LogoCard key={index} {...logo} />
//                 ))}
//             </div>
//             <IntroContainer />
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-13: Encapsulates logic
// **************************************************
// import './App.css'
// import { LOGOS_DATA } from './data.js'
// import LogoCard from './components/LogoCard/LogoCard.jsx'
// import IntroContainer from './components/IntroContainer/IntroContainer.jsx'

// function App() {
//     return (
//         <div>
//             <div className='logo-container'>
//                 {LOGOS_DATA.map((logo, index) => (
//                     <LogoCard key={index} {...logo} />
//                 ))}
//             </div>
//             <IntroContainer />
//         </div >
//     )
// }

// export default App
// **************************************************


// **************************************************
// STEP-14: Adds CounterButton component with children prop
// **************************************************
// - Introduced the CounterButton component to the App.
// - Demonstrates the use of the `children` prop by passing button text as a child element.
// - Provided an alternative approach (commented out) to pass text using a `label` prop.

// import './App.css'
// import { LOGOS_DATA } from './data.js'
// import LogoCard from './components/LogoCard/LogoCard.jsx'
// import CounterButton from './components/CounterButton/CounterButton.jsx'
// import IntroContainer from './components/IntroContainer/IntroContainer.jsx'

// function App() {
//     return (
//         <div>
//             <div className='logo-container'>
//                 {LOGOS_DATA.map((logo, index) => (
//                     <LogoCard key={index} {...logo} />
//                 ))}
//             </div>
//             <IntroContainer />

//             <div className="card">
//                 {/* children Prop */}
//                 <CounterButton>
//                     CLICK ME
//                 </CounterButton> 


//                 {/* using Attributes */}
//                 {/* <CounterButton lable='CLICK ME' /> */}
//             </div >
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-15: Adds click event handling to CounterButton
// **************************************************
// - Updated CounterButton to include an `onClick` event handler.
// - Implemented the `handleClick` function, which logs "Hello World!" when the button is clicked.
// - Ensured `onClick` receives a function reference (`handleClick`) rather than an immediate invocation (`handleClick()`).

// import './App.css'
// import { LOGOS_DATA } from './data.js'
// import LogoCard from './components/LogoCard/LogoCard.jsx'
// import CounterButton from './components/CounterButton/CounterButton.jsx'
// import IntroContainer from './components/IntroContainer/IntroContainer.jsx'

// function App() {
//     return (
//         <div>
//             <div className='logo-container'>
//                 {LOGOS_DATA.map((logo, index) => (
//                     <LogoCard key={index} {...logo} />
//                 ))}
//             </div>
//             <IntroContainer />

//             <div className="card">
//                 {/* children Prop */}
//                 <CounterButton>
//                     CLICK ME
//                 </CounterButton>
//              </div >
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-16: Makes CounterButton reusable with an onClick prop
// **************************************************
// - Refactored CounterButton to accept an `onClick` prop, allowing the parent component to define the button's behavior.
// - Removed the internal `handleClick` function to make the component more flexible.
// - This change enables CounterButton to be used in different contexts with different click handlers.

// import './App.css'
// import { LOGOS_DATA } from './data.js'
// import LogoCard from './components/LogoCard/LogoCard.jsx'
// import CounterButton from './components/CounterButton/CounterButton.jsx'
// import IntroContainer from './components/IntroContainer/IntroContainer.jsx'

// function App() {
//     function handleClick() {
//         console.log('Hello World (from App.jsx)!');
//     }

//     return (
//         <div>
//             <div className='logo-container'>
//                 {LOGOS_DATA.map((logo, index) => (
//                     <LogoCard key={index} {...logo} />
//                 ))}
//             </div>
//             <IntroContainer />

//             <div className="card">
//                 {/* children Prop */}
//                 <CounterButton onClick={handleClick}>
//                     CLICK ME
//                 </CounterButton>
//             </div >
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-17: Renames onClick prop to blahBlah (likely unintended change)
// **************************************************
// - Replaced `onClick` with `blahBlah`, making the prop name unconventional.
// - This change does not affect functionality but reduces clarity and deviates from standard prop naming conventions.
// - It's recommended to use `onClick` for consistency and readability.

// import './App.css'
// import { LOGOS_DATA } from './data.js'
// import LogoCard from './components/LogoCard/LogoCard.jsx'
// import CounterButton from './components/CounterButton/CounterButton.jsx'
// import IntroContainer from './components/IntroContainer/IntroContainer.jsx'

// function App() {
//     function blahBlahClick() {
//         console.log('Blah Blah (from App.jsx)!');
//     }

//     return (
//         <div>
//             <div className='logo-container'>
//                 {LOGOS_DATA.map((logo, index) => (
//                     <LogoCard key={index} {...logo} />
//                 ))}
//             </div>
//             <IntroContainer />

//             <div className="card">
//                 {/* children Prop */}
//                 <CounterButton blahBlah={blahBlahClick}>
//                     CLICK ME
//                 </CounterButton>
//             </div >
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-18: Adds a counter and dynamic message logging
// **************************************************
// - Introduced a `counter` variable inside the App component.
// - Implemented `handleClick(message)`, which increments `counter` and logs a message.
// - Updated `CounterButton` to call `handleClick` with a predefined message when clicked.
// - The button displays `CLICK ME {counter}`, but the UI does not update since `counter` is a regular variable, 
//   not a state variable (useState should be used for proper reactivity).

// import './App.css'
// import { LOGOS_DATA } from './data.js'
// import LogoCard from './components/LogoCard/LogoCard.jsx'
// import CounterButton from './components/CounterButton/CounterButton.jsx'
// import IntroContainer from './components/IntroContainer/IntroContainer.jsx'

// function App() {
//     let counter = 0;

//     function handleClick(message) {
//         counter++;
//         // does not work!
//         // console.log('message: ${message} - counter: ${counter}');

//         console.log(`message: ${message} - counter: ${counter}`);
//     }

//     return (
//         <div>
//             <div className='logo-container'>
//                 {LOGOS_DATA.map((logo, index) => (
//                     <LogoCard key={index} {...logo} />
//                 ))}
//             </div>
//             <IntroContainer />

//             <div className="card">
//                 <CounterButton onClick={() => handleClick(`Hello World ${counter + 1}!`)}>
//                     CLICK ME {counter}
//                 </CounterButton>
//             </div >
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-19: Logging Execution [READ: Understanding-React-Component-Execution.md]
// **************************************************
// import './App.css'
// import { LOGOS_DATA } from './data.js'
// import LogoCard from './components/LogoCard/LogoCard.jsx'
// import CounterButton from './components/CounterButton/CounterButton.jsx'
// import IntroContainer from './components/IntroContainer/IntroContainer.jsx'

// function App() {
//     function handleClick(message) {
//         console.log(message);
//     }

//     console.log(`App Component Executing!`);

//     return (
//         <div>
//             <div className='logo-container'>
//                 {LOGOS_DATA.map((logo, index) => (
//                     <LogoCard key={index} {...logo} />
//                 ))}
//             </div>
//             <IntroContainer />

//             <div className="card">
//                 <CounterButton onClick={() => handleClick(`Hello World 1`)}>CLICK ME 1st</CounterButton>
//                 <CounterButton onClick={() => handleClick(`Hello World 2!`)}>CLICK ME 2nd</CounterButton>
//             </div >
//         </div >
//     )
// }

// export default App
// **************************************************

// **************************************************
// STEP-20:Managing State with useState Hook
// **************************************************
// In this step, we introduce React's useState hook to manage state within the App component.
// This ensures that the component can hold dynamic values that persist across renders.

// import './App.css'
// import { useState } from 'react'

// import { LOGOS_DATA } from './data.js'
// import LogoCard from './components/LogoCard/LogoCard.jsx'
// import CounterButton from './components/CounterButton/CounterButton.jsx'
// import IntroContainer from './components/IntroContainer/IntroContainer.jsx'

// function App() {

//     // const stateArray = useState(0); // useState returns an array: [stateValue, stateUpdaterFunction]
//     // let [counter, updateCounter] = useState(0); // 'let' is unnecessary since the state value is immutable.

//     // Declaring state using useState:
//     const [counter, updateCounter] = useState(0);

//     function handleClick(message) {
//         // When using: const [counter, updateCounter] = useState(0);
//         // The 'counter' variable is read-only and cannot be reassigned.
//         // Attempting direct modification results in:
//         // Uncaught TypeError: Assignment to constant variable.
//         // counter++; // This would only work if counter were declared with let (not recommended for state).

//         // Correct way to update state:
//         updateCounter(counter => counter + 1); // React schedules a re-render with the updated state.

//         // Logs the message and the OLD value of counter, as state updates are asynchronous.
//         console.log(`message: ${message} - counter: ${counter}`);
//     }

//     console.log(`App Component Executing!`);

//     return (
//         <div>
//             <div className='logo-container'>
//                 {LOGOS_DATA.map((logo, index) => (
//                     <LogoCard key={index} {...logo} />
//                 ))}
//             </div>
//             <IntroContainer />

//             <div className="card">
//                 <CounterButton onClick={() => handleClick(`Hello World ${counter}!`)}>
//                     CLICK ME {counter}
//                 </CounterButton>
//             </div >
//         </div >
//     )
// }

// export default App
// **************************************************