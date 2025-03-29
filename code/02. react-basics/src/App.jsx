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

// import { LOGOS_DATA } from './data'

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

// import { LOGOS_DATA } from './data'

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

// import { LOGOS_DATA } from './data'

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

// import { LOGOS_DATA } from './data'

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
// import { LOGOS_DATA } from './data'
// import LogoCard from './components/LogoCard'
// import IntroContainer from './components/IntroContainer'

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
// import { LOGOS_DATA } from './data'
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