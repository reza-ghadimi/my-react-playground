// **************************************************
// A-01: Combines Header and Counter with local logic for input and button to pass count state.
// **************************************************
// import { useState } from 'react';

// import { log } from './log.js';
// import Header from './components/Header/Header.jsx';
// import Counter from './components/Counter/Counter.jsx';

// function App() {
//   log('<App /> rendered');

//   const [enteredNumber, setEnteredNumber] = useState(0);
//   const [chosenCount, setChosenCount] = useState(0);

//   function handleChange(event) {
//     setEnteredNumber(+event.target.value);
//   }

//   function handleSetClick() {
//     setChosenCount(enteredNumber);
//     setEnteredNumber(0);
//   }

//   return (
//     <>
//       <Header />
//       <main>
//         <section id="configure-counter">
//           <h2>Set Counter</h2>
//           <input type="number" onChange={handleChange} value={enteredNumber} />
//           <button onClick={handleSetClick}>Set</button>
//         </section>
//         <Counter initialCount={chosenCount} />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// A-02: Delegates configuration logic to ConfigureCounter, streamlining App by lifting state up.
// **************************************************
// import { useState } from 'react';

// import { log } from './log.js';
// import Header from './components/Header/Header.jsx';
// import Counter from './components/Counter/Counter.jsx';
// import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

// function App() {
//   log('<App /> rendered');

//   const [chosenCount, setChosenCount] = useState(0);

//   return (
//     <>
//       <Header />
//       <main>
//         <ConfigureCounter setChosenCount={setChosenCount} />
//         <Counter initialCount={chosenCount} />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// A-03:  Adds a key to Counter to force re-mounting when chosenCount changes, ensuring internal state reset.
// **************************************************
import { useState } from 'react';

import { log } from './log.js';
import Header from './components/Header/Header.jsx';
import Counter from './components/Counter/Counter.jsx';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter setChosenCount={setChosenCount} />
        <Counter  key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
// **************************************************
