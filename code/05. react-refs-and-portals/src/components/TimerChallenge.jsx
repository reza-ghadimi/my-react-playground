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
//     clearTimeout(timer)
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
//     clearTimeout(timer)
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
//     clearTimeout(timer)
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
// import { useRef, useState } from 'react';

// export default function TimerChallenge({ title, targetTime }) {
//   const timer = new useRef();

//   const [timerStarted, setTimerStarted] = useState(false);
//   const [timerExpired, setTimerExpired] = useState(false);

//   function handleStart() {
//     timer.current = setTimeout(() => {
//       setTimerExpired(true);
//     }, targetTime * 1000);

//     setTimerStarted(true);
//   }

//   function handleStop() {
//     clearTimeout(timer.current)
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
// B-02.03/00: Introduced ResultModal component to display results after timer expires.
// **************************************************
// import { useRef, useState } from 'react';
// import ResultModal from './ResultModel.jsx';

// export default function TimerChallenge({ title, targetTime }) {
//   const timer = new useRef();

//   const [timerStarted, setTimerStarted] = useState(false);
//   const [timerExpired, setTimerExpired] = useState(false);

//   function handleStart() {
//     timer.current = setTimeout(() => {
//       setTimerExpired(true);
//     }, targetTime * 1000);

//     setTimerStarted(true);
//   }

//   function handleStop() {
//     clearTimeout(timer.current)
//     setTimerStarted(false);
//   }

//   return (
//     <>
//       {timerExpired ? <ResultModal targetTime={targetTime} /> : null}

//       <section className="challenge">
//         <h2>{title}</h2>
//         {timerExpired && <p>You lost!</p>}
//         <p className="challenge-time">
//           {targetTime} second{targetTime > 1 ? 's' : ''}
//         </p>
//         <p>
//           <button onClick={timerStarted ? handleStop : handleStart}>
//             {timerStarted ? 'Stop' : 'Start'} Challenge
//           </button>
//         </p>
//         <p className={timerStarted ? 'active' : undefined}>
//           {timerStarted ? 'Time is running...' : 'Timer inactive'}
//         </p>
//       </section>
//     </>
//   );
// }
// **************************************************

// **************************************************
// B-02.03/01: Updates TimerChallenge component to display ResultModal after timer expiration, showing user status (won/lost).
// **************************************************
// import { useRef, useState } from 'react';
// import ResultModal from './ResultModel.jsx';

// export default function TimerChallenge({ title, targetTime }) {
//   const timer = new useRef();
//   const millisecond = 1000;

//   const [timesUp, setTimesUp] = useState(false);
//   const [remainingTime, setTimeRemaining] = useState(targetTime * millisecond);

//   const timerStarted = remainingTime < targetTime * millisecond;

//   const userWon = timerStarted && remainingTime > 0;
//   const userLost = timerStarted && remainingTime <= 0;

//   // Infinite loop occurs if the timer isn't stopped — caused by setTimesUp triggering a re-render.
//   if (remainingTime <= 0) {
//     handleStop();
//   }

//   function handleStart() {
//     const interval = 100;

//     timer.current = setInterval(() => {
//       setTimeRemaining(currentTime => currentTime - interval)
//     }, interval);
//   }

//   function handleStop() {
//     clearInterval(timer.current);
//     setTimesUp(true);
//   }

//   return (
//     <>
//       {timesUp ? <ResultModal userWon={userWon} targetTimeInSecond={targetTime} remainingTimeInMillisecond={remainingTime} /> : null}

//       <section className="challenge">
//         <h2>{title}</h2>
//         {userLost && <p>You lost!</p>}
//         <p className="challenge-time">
//           {targetTime} second{targetTime > 1 ? 's' : ''}
//         </p>
//         <p>
//           <button onClick={timerStarted ? handleStop : handleStart}>
//             {timerStarted ? 'Stop' : 'Start'} Challenge
//           </button>
//         </p>
//         <p className={timerStarted ? 'active' : undefined}>
//           {timerStarted ? 'Time is running...' : 'Timer inactive'}
//         </p>
//       </section>
//     </>
//   );
// }
// **************************************************

// **************************************************
// B-02.03/02: Added logic to reset timer when it stops, allowing users to restart challenge with initial state.
// **************************************************
// import { useRef, useState } from 'react';
// import ResultModal from './ResultModel.jsx';

// export default function TimerChallenge({ title, targetTime }) {
//   const timer = new useRef();
//   const millisecond = 1000;

//   const [timesUp, setTimesUp] = useState(false);
//   const [remainingTime, setTimeRemaining] = useState(targetTime * millisecond);

//   const timerStarted = remainingTime < targetTime * millisecond;

//   const userWon = timerStarted && remainingTime > 0;
//   const userLost = timerStarted && remainingTime <= 0;

//   if (remainingTime <= 0 && timer.current) {
//     handleStop();
//   }

//   function handleStart() {
//     const interval = 100;

//     timer.current = setInterval(() => {
//       setTimeRemaining(currentTime => currentTime - interval)
//     }, interval);
//   }

//   function handleStop() {
//     if (timer.current) {
//       clearInterval(timer.current);

//       timer.current = null;
//     }

//     setTimesUp(true);
//   }

//   return (
//     <>
//       {timesUp ? <ResultModal userWon={userWon} targetTimeInSecond={targetTime} remainingTimeInMillisecond={remainingTime} /> : null}

//       <section className="challenge">
//         <h2>{title}</h2>
//         {userLost && <p>You lost!</p>}
//         <p className="challenge-time">
//           {targetTime} second{targetTime > 1 ? 's' : ''}
//         </p>
//         <p>
//           <button onClick={timerStarted ? handleStop : handleStart}>
//             {timerStarted ? 'Stop' : 'Start'} Challenge
//           </button>
//         </p>
//         <p className={timerStarted ? 'active' : undefined}>
//           {timerStarted ? 'Time is running...' : 'Timer inactive'}
//         </p>
//       </section>
//     </>
//   );
// }
// **************************************************

// **************************************************
// B-02.03/04: Added `resetTimer` function passed to ResultModal to reset timer state on closing modal.
// **************************************************
// import { useRef, useState } from 'react';
// import ResultModal from './ResultModel.jsx';

// export default function TimerChallenge({ title, targetTime }) {
//   const timer = new useRef();
//   const millisecond = 1000;

//   const [timesUp, setTimesUp] = useState(false);
//   const [remainingTime, setTimeRemaining] = useState(targetTime * millisecond);

//   const timerStarted = remainingTime < targetTime * millisecond;

//   const userWon = timerStarted && remainingTime > 0;
//   const userLost = timerStarted && remainingTime <= 0;

//   if (remainingTime <= 0 && timer.current) {
//     handleStop();
//   }

//   function resetTimer() {
//     setTimesUp(false);
//     setTimeRemaining(targetTime * millisecond);
//   }

//   function handleStart() {
//     const interval = 100;

//     timer.current = setInterval(() => {
//       setTimeRemaining(currentTime => currentTime - interval)
//     }, interval);
//   }

//   function handleStop() {
//     if (timer.current) {
//       clearInterval(timer.current);

//       timer.current = null;
//     }

//     setTimesUp(true);
//   }

//   return (
//     <>
//       {timesUp ? <ResultModal userWon={userWon} resetTimer={resetTimer} targetTimeInSecond={targetTime} remainingTimeInMillisecond={remainingTime} /> : null}

//       <section className="challenge">
//         <h2>{title}</h2>
//         {userLost && <p>You lost!</p>}
//         <p className="challenge-time">
//           {targetTime} second{targetTime > 1 ? 's' : ''}
//         </p>
//         <p>
//           <button onClick={timerStarted ? handleStop : handleStart}>
//             {timerStarted ? 'Stop' : 'Start'} Challenge
//           </button>
//         </p>
//         <p className={timerStarted ? 'active' : undefined}>
//           {timerStarted ? 'Time is running...' : 'Timer inactive'}
//         </p>
//       </section>
//     </>
//   );
// }
// **************************************************

// **************************************************
// B-02.03/05: Implements ResultModal as a dialog element and manages its opening using dialogRef for better accessibility.
// **************************************************
// import { useRef, useState } from 'react';
// import ResultModal from './ResultModel.jsx';

// export default function TimerChallenge({ title, targetTime }) {
//   const timer = new useRef();
//   const dialogRef = new useRef();
//   const millisecond = 1000;

//   const [remainingTime, setTimeRemaining] = useState(targetTime * millisecond);

//   const timerStarted = remainingTime < targetTime * millisecond;

//   const userWon = timerStarted && remainingTime > 0;
//   const userLost = timerStarted && remainingTime <= 0;

//   if (remainingTime <= 0) {
//     handleStop();
//   }

//   function resetTimer() {
//     setTimeRemaining(targetTime * millisecond);
//   }

//   function handleStart() {
//     const interval = 100;

//     timer.current = setInterval(() => {
//       setTimeRemaining(currentTime => currentTime - interval)
//     }, interval);
//   }

//   function handleStop() {
//     clearInterval(timer.current);

//     dialogRef.current.showModal();
//   }

//   return (
//     <>
//       <ResultModal
//         ref={dialogRef}
//         userWon={userWon}
//         resetTimer={resetTimer}
//         targetTimeInSecond={targetTime}
//         remainingTimeInMillisecond={remainingTime}
//       />

//       <section className="challenge">
//         <h2>{title}</h2>
//         {userLost && <p>You lost!</p>}
//         <p className="challenge-time">
//           {targetTime} second{targetTime > 1 ? 's' : ''}
//         </p>
//         <p>
//           <button onClick={timerStarted ? handleStop : handleStart}>
//             {timerStarted ? 'Stop' : 'Start'} Challenge
//           </button>
//         </p>
//         <p className={timerStarted ? 'active' : undefined}>
//           {timerStarted ? 'Time is running...' : 'Timer inactive'}
//         </p>
//       </section>
//     </>
//   );
// }
// **************************************************

// **************************************************
// B-02.03/06: Refined `handleStop` to open ResultModal on timer stop, allowing users to see results in a modal dialog.
// **************************************************
import { useRef, useState } from 'react';
import ResultModal from './ResultModel.jsx';

export default function TimerChallenge({ title, targetTime }) {
  const timer = new useRef();
  const dialogRef = new useRef();
  const millisecond = 1000;

  const [remainingTime, setTimeRemaining] = useState(targetTime * millisecond);

  const timerStarted = remainingTime < targetTime * millisecond;

  const userWon = timerStarted && remainingTime > 0;
  const userLost = timerStarted && remainingTime <= 0;

  if (remainingTime <= 0) {
    handleStop();
  }

  function resetTimer() {
    setTimeRemaining(targetTime * millisecond);
  }

  function handleStart() {
    const interval = 100;

    timer.current = setInterval(() => {
      setTimeRemaining(currentTime => currentTime - interval)
    }, interval);
  }

  function handleStop() {
    clearInterval(timer.current);

    dialogRef.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialogRef}
        userWon={userWon}
        resetTimer={resetTimer}
        targetTimeInSecond={targetTime}
        remainingTimeInMillisecond={remainingTime}
      />

      <section className="challenge">
        <h2>{title}</h2>
        {userLost && <p>You lost!</p>}
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
    </>
  );
}
// **************************************************
