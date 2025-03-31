// **************************************************
// **************************************************
// A: JSX Return Structure in React
// **************************************************
// **************************************************

// **************************************************
// A-01: Could not return multiple tag/value
// **************************************************
// import './App.css'

// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

// function App() {
//   return (
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//   )
// }

// export default App
// **************************************************

// **************************************************
// A-02: Return a div
// **************************************************

// import './App.css'

// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

// function App() {
//   return (
//     <div>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//     </div>
//   )
// }

// export default App
// **************************************************

// **************************************************
// A-03: Using <Fragment> to Remove Extra <div>
// **************************************************
// import './App.css'
// import { Fragment } from 'react';
// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

// function App() {
//   return (
//     <Fragment>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//     </Fragment>
//   )
// }

// export default App
// **************************************************

// **************************************************
// A-04: Replacing <Fragment> with <>...</> (Short Syntax)
// **************************************************
// import './App.css'
// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

// function App() {
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//     </>
//   )
// }

// export default App
// **************************************************

// **************************************************
// **************************************************
// **************************************************
// **************************************************

// **************************************************
// **************************************************
// B: Modularization & Clean Code Practices
// **************************************************
// **************************************************

// **************************************************
//  B-01: https://github.com/academind/react-complete-guide-course-resources
// **************************************************
// import { useState } from 'react';

// import { EXAMPLES, CORE_CONCEPTS } from './data.js';

// import TabButton from './components/TabButton.jsx';
// import Header from './components/Header/Header.jsx';
// import CoreConcept from './components/CoreConcept.jsx';

// function App() {
//     const [selectedTopic, setSelectedTopic] = useState();

//     function handleSelect(selectedButton) {
//         setSelectedTopic(selectedButton);
//     }

//     let tabContent = <p>Please select a topic.</p>;

//     if (selectedTopic) {
//         tabContent = (
//             <div id="tab-content">
//                 <h3>{EXAMPLES[selectedTopic].title}</h3>
//                 <p>{EXAMPLES[selectedTopic].description}</p>
//                 <pre>
//                     <code>{EXAMPLES[selectedTopic].code}</code>
//                 </pre>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <Header />
//             <main>
//                 <section id="core-concepts">
//                     <h2>Core Concepts</h2>
//                     <ul>
//                         {CORE_CONCEPTS.map((conceptItem) => (
//                             <CoreConcept key={conceptItem.title} {...conceptItem} />
//                         ))}
//                     </ul>
//                 </section>
//                 <section id="examples">
//                     <h2>Examples</h2>
//                     <menu>
//                         <TabButton
//                             isSelected={selectedTopic === 'components'}
//                             onSelect={() => handleSelect('components')}
//                         >
//                             Components
//                         </TabButton>
//                         <TabButton
//                             isSelected={selectedTopic === 'jsx'}
//                             onSelect={() => handleSelect('jsx')}
//                         >
//                             JSX
//                         </TabButton>
//                         <TabButton
//                             isSelected={selectedTopic === 'props'}
//                             onSelect={() => handleSelect('props')}
//                         >
//                             Props
//                         </TabButton>
//                         <TabButton
//                             isSelected={selectedTopic === 'state'}
//                             onSelect={() => handleSelect('state')}
//                         >
//                             State
//                         </TabButton>
//                     </menu>
//                     {tabContent}
//                 </section>
//             </main>
//         </div >
//     );
// }

// export default App;
// **************************************************

// **************************************************
// B-02: Replaced hard coded TabButton elements with a map() function to dynamically generate buttons based on EXAMPLES.
// **************************************************
// import { useState } from 'react';

// import { EXAMPLES, CORE_CONCEPTS } from './data.js';

// import TabButton from './components/TabButton.jsx';
// import Header from './components/Header/Header.jsx';
// import CoreConcept from './components/CoreConcept.jsx';

// function App() {
//     const [selectedTopic, setSelectedTopic] = useState();

//     function handleSelect(selectedButton) {
//         setSelectedTopic(selectedButton);
//     }

//     let tabContent = <p>Please select a topic.</p>;

//     if (selectedTopic) {
//         tabContent = (
//             <div id="tab-content">
//                 <h3>{EXAMPLES[selectedTopic].title}</h3>
//                 <p>{EXAMPLES[selectedTopic].description}</p>
//                 <pre>
//                     <code>{EXAMPLES[selectedTopic].code}</code>
//                 </pre>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <Header />
//             <main>
//                 <section id="core-concepts">
//                     <h2>Core Concepts</h2>
//                     <ul>
//                         {CORE_CONCEPTS.map((conceptItem) => (
//                             <CoreConcept key={conceptItem.title} {...conceptItem} />
//                         ))}
//                     </ul>
//                 </section>
//                 <section id="examples">
//                     <h2>Examples</h2>
//                     <menu>
//                         {/* This code snippet dynamically generates a list of <TabButton> components based on the EXAMPLES object. */}
//                         {Object.keys(EXAMPLES).map((key) => (
//                             <TabButton
//                                 key={key}
//                                 isSelected={selectedTopic === key}
//                                 onSelect={() => handleSelect(key)}
//                             >
//                                 {EXAMPLES[key].title}
//                             </TabButton>
//                         ))}
//                     </menu>
//                     {tabContent}
//                 </section>
//             </main>
//         </div >
//     );
// }

// export default App;
// **************************************************

// **************************************************
// B-03: Extracting Components for Better Reusability & Maintainability
// **************************************************
import Examples from './components/Examples.jsx';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';

function App() {
    return (
        <>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </>
    );
}

export default App;
// **************************************************

// **************************************************
// **************************************************
// **************************************************
// **************************************************
