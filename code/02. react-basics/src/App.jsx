// **************************************************
// STEP-01: Initial Setup and Basic App Structure
// **************************************************
// import './App.css'

// function App() {
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src='vite.svg' className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src='src/assets/react.svg' className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// **************************************************

// **************************************************
// STEP-02: Refactoring the Code by Creating a Reusable LogoLinks Component
// **************************************************
// import './App.css'

// function LogoLinks() {
//   return (
//     <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src='vite.svg' className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src='src/assets/react.svg' className="logo react" alt="React logo" />
//         </a>
//     </div>
//   )
// }

// function HomeIntro() {
//   return (
//     <div>
//       <h1>Vite + React</h1>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <LogoLinks />
//       <HomeIntro />
//     </>
//   )
// }

// export default App
// **************************************************

// **************************************************
// STEP-03: Enhancing the HomeIntro with Random Description Display
// **************************************************
// import './App.css'

// const introDescriptions = [
//   'Click on the Vite and React logos to learn more',
//   'Click the Vite and React logos to dive deeper.',
//   'Explore Vite and React by clicking on their logos.',
//   'Discover more about Vite and React by clicking the logos.',
//   'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//   let number = Math.floor(Math.random() * max);

//   return number;
// }

// function LogoLinks() {
//   return (
//     <div>
//       <a href="https://vite.dev" target="_blank">
//         <img src='vite.svg' className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src='src/assets/react.svg' className="logo react" alt="React logo" />
//       </a>
//     </div>
//   )
// }

// function HomeIntro() {
//   return (
//     <div>
//       <h1>Vite + React</h1>
//       <p className="read-the-docs">
//         {introDescriptions[generateRandomNumber(5)]}
//       </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <LogoLinks />
//       <HomeIntro />
//     </>
//   )
// }

// export default App
// **************************************************

// **************************************************
// STEP-04: Refactoring to Store Random Description in a Variable
// **************************************************
// import './App.css'

// const introDescriptions = [
//   'Click on the Vite and React logos to learn more',
//   'Click the Vite and React logos to dive deeper.',
//   'Explore Vite and React by clicking on their logos.',
//   'Discover more about Vite and React by clicking the logos.',
//   'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//   let number = Math.floor(Math.random() * max);

//   return number;
// }

// const description = introDescriptions[generateRandomNumber(introDescriptions.length)];

// function LogoLinks() {
//   return (
//     <div>
//       <a href="https://vite.dev" target="_blank">
//         <img src='vite.svg' className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src='src/assets/react.svg' className="logo react" alt="React logo" />
//       </a>
//     </div>
//   )
// }

// function HomeIntro() {
//   return (
//     <div>
//       <h1>Vite + React</h1>
//       <p className="read-the-docs">
//         {description}
//       </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <LogoLinks />
//       <HomeIntro />
//     </>
//   )
// }

// export default App
// **************************************************

// **************************************************
// STEP-05: Refactoring to Use Proper Asset Imports and Component Structure
// **************************************************
// // Importing the necessary styles for the application
// import './App.css'

// // Importing the assets (logos) required for the LogoLinks component
// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

// const introDescriptions = [
//   'Click on the Vite and React logos to learn more',
//   'Click the Vite and React logos to dive deeper.',
//   'Explore Vite and React by clicking on their logos.',
//   'Discover more about Vite and React by clicking the logos.',
//   'Want to learn more about Vite and React? Click the logos!'
// ];

// function generateRandomNumber(max) {
//   let number = Math.floor(Math.random() * max);

//   return number;
// }

// const description = introDescriptions[generateRandomNumber(introDescriptions.length)];

// function LogoLinks() {
//   return (
//     <div>
//       <a href="https://vite.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//   )
// }

// function HomeIntro() {
//   return (
//     <div>
//       <h1>Vite + React</h1>
//       <p className="read-the-docs">
//         {description}
//       </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <LogoLinks />
//       <HomeIntro />
//     </>
//   )
// }

// export default App
// **************************************************