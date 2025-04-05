// **************************************************
// A-01: Renders only the Player component with no interaction.
// **************************************************
// import Player from './components/Player.jsx';

// function App() {
//   return (
//     <>
//       <Player />
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// B-01: Adds a single TimerChallenge component below Player.
// **************************************************
// import Player from './components/Player.jsx';
// import TimerChallenge from './components/TimerChallenge.jsx';

// function App() {
//   return (
//     <>
//       <Player />
//       <div id="challenges">
//         <TimerChallenge title="Easy" targetTime={5} />
//       </div>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// B-02: Adds multiple TimerChallenge components with different target times.
// **************************************************
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
// **************************************************
