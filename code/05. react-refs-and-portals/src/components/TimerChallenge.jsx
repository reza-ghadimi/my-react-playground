// **************************************************
// B-01.00: Basic timer challenge with start logic; state tracks timer start and expiration.
// **************************************************
// import { useState } from 'react';

// export default function TimerChallenge({ title, targetTime }) {
//   const [timerStarted, setTimerStarted] = useState(false);
//   const [timerExpired, setTimerExpired] = useState(false);

//   function handleStart() {
//     setTimeout(() => {
//       setTimerExpired(true);
//     }, targetTime * 1000);

//     setTimerStarted(true);
//   }

//   return (
//     <section className="challenge">
//       <h2>{title}</h2>
//       {timerExpired && <p>You lost!</p>}
//       <p className="challenge-time">
//         {targetTime} second{targetTime > 1 ? 's' : ''}
//       </p>
//       <p>
//         <button onClick={handleStart}>
//           {timerStarted ? 'Stop' : 'Start'} Challenge
//         </button>
//       </p>
//       <p className={timerStarted ? 'active' : undefined}>
//         {timerStarted ? 'Time is running...' : 'Timer inactive'}
//       </p>
//     </section>
//   );
// }
// **************************************************

// **************************************************
// B-01.01: Adds stop button; clears interval when stopped.
// **************************************************
// Step-02/01:
// import { useState } from 'react';

// export default function TimerChallenge({ title, targetTime }) {
//   let timer;
//   const [timerStarted, setTimerStarted] = useState(false);
//   const [timerExpired, setTimerExpired] = useState(false);

//   function handleStart() {
//     timer = setTimeout(() => {
//       setTimerExpired(true);
//     }, targetTime * 1000);

//     setTimerStarted(true);
//   }

//   function handleStop() {
//     clearInterval(timer)
//     setTimerStarted(false);
//   }

//   return (
//     <section className="challenge">
//       <h2>{title}</h2>
//       {timerExpired && <p>You lost!</p>}
//       <p className="challenge-time">
//         {targetTime} second{targetTime > 1 ? 's' : ''}
//       </p>
//       <p>
//         <button onClick={timerStarted ? handleStop : handleStart}>
//           {timerStarted ? 'Stop' : 'Start'} Challenge
//         </button>
//       </p>
//       <p className={timerStarted ? 'active' : undefined}>
//         {timerStarted ? 'Time is running...' : 'Timer inactive'}
//       </p>
//     </section>
//   );
// }
// **************************************************

// **************************************************
// B-02.00: Multiple instances of TimerChallenge supported with same timer logic.
// **************************************************
// import { useState } from 'react';

// export default function TimerChallenge({ title, targetTime }) {
//   let timer;
//   const [timerStarted, setTimerStarted] = useState(false);
//   const [timerExpired, setTimerExpired] = useState(false);

//   function handleStart() {
//     timer = setTimeout(() => {
//       setTimerExpired(true);
//     }, targetTime * 1000);

//     setTimerStarted(true);
//   }

//   function handleStop() {
//     clearInterval(timer)
//     setTimerStarted(false);
//   }

//   return (
//     <section className="challenge">
//       <h2>{title}</h2>
//       {timerExpired && <p>You lost!</p>}
//       <p className="challenge-time">
//         {targetTime} second{targetTime > 1 ? 's' : ''}
//       </p>
//       <p>
//         <button onClick={timerStarted ? handleStop : handleStart}>
//           {timerStarted ? 'Stop' : 'Start'} Challenge
//         </button>
//       </p>
//       <p className={timerStarted ? 'active' : undefined}>
//         {timerStarted ? 'Time is running...' : 'Timer inactive'}
//       </p>
//     </section>
//   );
// }
// **************************************************

// **************************************************
// B-02.01: Moves timer to module scope to persist across re-renders (not optimal).
// **************************************************
// import { useState } from 'react';

// let timer;

// export default function TimerChallenge({ title, targetTime }) {
//   const [timerStarted, setTimerStarted] = useState(false);
//   const [timerExpired, setTimerExpired] = useState(false);

//   function handleStart() {
//     timer = setTimeout(() => {
//       setTimerExpired(true);
//     }, targetTime * 1000);

//     setTimerStarted(true);
//   }

//   function handleStop() {
//     clearInterval(timer)
//     setTimerStarted(false);
//   }

//   return (
//     <section className="challenge">
//       <h2>{title}</h2>
//       {timerExpired && <p>You lost!</p>}
//       <p className="challenge-time">
//         {targetTime} second{targetTime > 1 ? 's' : ''}
//       </p>
//       <p>
//         <button onClick={timerStarted ? handleStop : handleStart}>
//           {timerStarted ? 'Stop' : 'Start'} Challenge
//         </button>
//       </p>
//       <p className={timerStarted ? 'active' : undefined}>
//         {timerStarted ? 'Time is running...' : 'Timer inactive'}
//       </p>
//     </section>
//   );
// }
// **************************************************

// **************************************************
// B-02.02: Refactors timer to useRef for persistent instance-specific timer tracking.
// **************************************************
import { useRef, useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  const timer = new useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearInterval(timer.current)
    setTimerStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}
// **************************************************