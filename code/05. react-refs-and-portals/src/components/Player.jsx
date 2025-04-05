// **************************************************
// A-01.00: Static welcome message, no state, no interaction.
// **************************************************
// export default function Player() {
//   return (
//     <section id="player">
//       <h2>Welcome unknown</h2>
//       <p>
//         <input type="text" />
//         <button>Set Name</button>
//       </p>
//     </section>
//   );
// }
// **************************************************

// **************************************************
// A-01.01: Adds useState to track playerName and updates name via button click.
// **************************************************
// import { useState } from "react";

// export default function Player() {
//   let enteredName = null;
//   const [playerName, setPlayerName] = useState(null);

//   return (
//     <section id="player">
//       <h2>Welcome {playerName ?? 'unknown'}</h2>
//       <p>
//         <input type="text" onChange={(e) => enteredName = e.target.value} />
//         <button onClick={() => setPlayerName(enteredName)}>Set Name</button>
//       </p>
//     </section>
//   );
// }
// **************************************************

// **************************************************
// A-01.02: Replaces local variable with useRef to read input value when button clicked.
// **************************************************
// import { useState, useRef } from "react";

// export default function Player() {
//   const nameInputRef = useRef(null);
//   const [playerName, setPlayerName] = useState(null);

//   return (
//     <section id="player">
//       <h2>Welcome {playerName ?? 'unknown'}</h2>
//       <p>
//         <input type="text" ref={nameInputRef} />
//         <button onClick={() => setPlayerName(nameInputRef.current.value)}>Set Name</button>
//       </p>
//     </section>
//   );
// }
// **************************************************

// **************************************************
// A-01.03: Adds function to both read and reset input field after setting name.
// **************************************************
// import { useState, useRef } from "react";

// export default function Player() {
//   const nameInputRef = useRef(null);
//   const [playerName, setPlayerName] = useState(null);

//   function handleClick() {
//     setPlayerName(nameInputRef.current.value)
//     nameInputRef.current.value = 'blah blah';
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {playerName ?? 'unknown'}</h2>
//       <p>
//         <input type="text" ref={nameInputRef} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
// **************************************************

// **************************************************
// A-01.04: Finalizes previous version; reads input via ref and sets playerName state.
// **************************************************
import { useState, useRef } from "react";

export default function Player() {
  const nameInputRef = useRef(null);
  const [playerName, setPlayerName] = useState(null);

  const isPlayerNameEmpty = !playerName || playerName?.trim() === "";

  return (
    <section id="player">
      <h2>Welcome {isPlayerNameEmpty == false ? playerName : 'unknown'}</h2>
      <p>
        <input type="text" ref={nameInputRef} />
        <button onClick={() => setPlayerName(nameInputRef.current.value)}>Set Name</button>
      </p>
    </section>
  );
}
// **************************************************