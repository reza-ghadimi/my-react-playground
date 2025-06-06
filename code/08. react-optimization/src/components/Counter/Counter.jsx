// **************************************************
// A-01:  Basic counter with local state, increment/decrement, and static prime check on initial value.
// **************************************************
// import { useState } from 'react';

// import IconButton from '../UI/IconButton.jsx';
// import MinusIcon from '../UI/Icons/MinusIcon.jsx';
// import PlusIcon from '../UI/Icons/PlusIcon.jsx';
// import CounterOutput from './CounterOutput.jsx';
// import { log } from '../../log.js';

// function isPrime(number) {
//   log(
//     'Calculating if is prime number',
//     2,
//     'other'
//   );
//   if (number <= 1) {
//     return false;
//   }

//   const limit = Math.sqrt(number);

//   for (let i = 2; i <= limit; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// export default function Counter({ initialCount }) {
//   log('<Counter /> rendered', 1);
//   const initialCountIsPrime = isPrime(initialCount);

//   const [counter, setCounter] = useState(initialCount);

//   function handleDecrement() {
//     setCounter((prevCounter) => prevCounter - 1);
//   }

//   function handleIncrement() {
//     setCounter((prevCounter) => prevCounter + 1);
//   }

//   return (
//     <section className="counter">
//       <p className="counter-info">
//         The initial counter value was <strong>{initialCount}</strong>. It{' '}
//         <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
//       </p>
//       <p>
//         <IconButton icon={MinusIcon} onClick={handleDecrement}>
//           Decrement
//         </IconButton>
//         <CounterOutput value={counter} />
//         <IconButton icon={PlusIcon} onClick={handleIncrement}>
//           Increment
//         </IconButton>
//       </p>
//     </section>
//   );
// }
// **************************************************

// **************************************************
// A-02:  Adds memoization (React.memo) to prevent unnecessary re-renders of the Counter component.// **************************************************
// **************************************************
// import { memo, useState } from 'react';

// import IconButton from '../UI/IconButton.jsx';
// import PlusIcon from '../UI/Icons/PlusIcon.jsx';
// import CounterOutput from './CounterOutput.jsx';
// import MinusIcon from '../UI/Icons/MinusIcon.jsx';

// import { log } from '../../log.js';

// function isPrime(number) {
//   log(
//     'Calculating if is prime number',
//     2,
//     'other'
//   );
//   if (number <= 1) {
//     return false;
//   }

//   const limit = Math.sqrt(number);

//   for (let i = 2; i <= limit; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// const Counter = memo(function Counter({ initialCount }) {
//   log('<Counter /> rendered', 1);
//   const initialCountIsPrime = isPrime(initialCount);

//   const [counter, setCounter] = useState(initialCount);

//   function handleDecrement() {
//     setCounter((prevCounter) => prevCounter - 1);
//   }

//   function handleIncrement() {
//     setCounter((prevCounter) => prevCounter + 1);
//   }

//   return (
//     <section className="counter">
//       <p className="counter-info">
//         The initial counter value was <strong>{initialCount}</strong>. It{' '}
//         <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
//       </p>
//       <p>
//         <IconButton icon={MinusIcon} onClick={handleDecrement}>
//           Decrement
//         </IconButton>
//         <CounterOutput value={counter} />
//         <IconButton icon={PlusIcon} onClick={handleIncrement}>
//           Increment
//         </IconButton>
//       </p>
//     </section>
//   );
// })

// export default Counter;
// **************************************************

// **************************************************
// A-03: Uses useCallback for handlers and prepares for change-tracking logic by stabilizing callbacks.
// **************************************************
// import { memo, useState, useCallback } from 'react';

// import IconButton from '../UI/IconButton.jsx';
// import PlusIcon from '../UI/Icons/PlusIcon.jsx';
// import CounterOutput from './CounterOutput.jsx';
// import MinusIcon from '../UI/Icons/MinusIcon.jsx';

// import { log } from '../../log.js';

// function isPrime(number) {
//   log(
//     'Calculating if is prime number',
//     2,
//     'other'
//   );
//   if (number <= 1) {
//     return false;
//   }

//   const limit = Math.sqrt(number);

//   for (let i = 2; i <= limit; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// const Counter = memo(function Counter({ initialCount }) {
//   log('<Counter /> rendered', 1);
//   const initialCountIsPrime = isPrime(initialCount);

//   const [counter, setCounter] = useState(initialCount);

//   const handleDecrement = useCallback(function handleDecrement() {
//     setCounter((prevCounter) => prevCounter - 1);
//   }, []);

//   const handleIncrement = useCallback(function handleIncrement() {
//     setCounter((prevCounter) => prevCounter + 1);
//   }, []);

//   return (
//     <section className="counter">
//       <p className="counter-info">
//         The initial counter value was <strong>{initialCount}</strong>. It{' '}
//         <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
//       </p>
//       <p>
//         <IconButton icon={MinusIcon} onClick={handleDecrement}>
//           Decrement
//         </IconButton>
//         <CounterOutput value={counter} />
//         <IconButton icon={PlusIcon} onClick={handleIncrement}>
//           Increment
//         </IconButton>
//       </p>
//     </section>
//   );
// })

// export default Counter;
// **************************************************

// **************************************************
// A-04:  Applies useMemo to optimize prime check and prepares for keyed history-based tracking.
// **************************************************
// import { memo, useState, useMemo, useCallback } from 'react';

// import IconButton from '../UI/IconButton.jsx';
// import PlusIcon from '../UI/Icons/PlusIcon.jsx';
// import CounterOutput from './CounterOutput.jsx';
// import MinusIcon from '../UI/Icons/MinusIcon.jsx';

// import { log } from '../../log.js';

// function isPrime(number) {
//   log(
//     'Calculating if is prime number',
//     2,
//     'other'
//   );
//   if (number <= 1) {
//     return false;
//   }

//   const limit = Math.sqrt(number);

//   for (let i = 2; i <= limit; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// const Counter = memo(function Counter({ initialCount }) {
//   log('<Counter /> rendered', 1);
//   const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);

//   const [counter, setCounter] = useState(initialCount);

//   const handleDecrement = useCallback(function handleDecrement() {
//     setCounter((prevCounter) => prevCounter - 1);
//   }, []);

//   const handleIncrement = useCallback(function handleIncrement() {
//     setCounter((prevCounter) => prevCounter + 1);
//   }, []);

//   return (
//     <section className="counter">
//       <p className="counter-info">
//         The initial counter value was <strong>{initialCount}</strong>. It{' '}
//         <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
//       </p>
//       <p>
//         <IconButton icon={MinusIcon} onClick={handleDecrement}>
//           Decrement
//         </IconButton>
//         <CounterOutput value={counter} />
//         <IconButton icon={PlusIcon} onClick={handleIncrement}>
//           Increment
//         </IconButton>
//       </p>
//     </section>
//   );
// })

// export default Counter;
// **************************************************

// **************************************************
// A-05: Introduces counterChanges array to track full history of counter state changes for rendering.
// **************************************************
// import { memo, useState, useMemo, useCallback } from 'react';

// import { log } from '../../log.js';
// import IconButton from '../UI/IconButton.jsx';
// import MinusIcon from '../UI/Icons/MinusIcon.jsx';
// import PlusIcon from '../UI/Icons/PlusIcon.jsx';
// import CounterOutput from './CounterOutput.jsx';
// import CounterHistory from './CounterHistory.jsx';

// function isPrime(number) {
//   log('Calculating if is prime number', 2, 'other');

//   if (number <= 1) {
//     return false;
//   }

//   const limit = Math.sqrt(number);

//   for (let i = 2; i <= limit; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// const Counter = memo(function Counter({ initialCount }) {
//   log('<Counter /> rendered', 1);

//   const initialCountIsPrime = useMemo(
//     () => isPrime(initialCount),
//     [initialCount]
//   );

//   // const [counter, setCounter] = useState(initialCount);
//   const [counterChanges, setCounterChanges] = useState([0]);

//   const currentCounter = counterChanges.reduce(
//     (prevCounter, counterChange) => prevCounter + counterChange,
//     0
//   );

//   const handleDecrement = useCallback(function handleDecrement() {
//     // setCounter((prevCounter) => prevCounter - 1);
//     setCounterChanges((prevCounterChanges) => [
//       currentCounter - 1,
//       ...prevCounterChanges,
//     ]);
//   }, []);

//   const handleIncrement = useCallback(function handleIncrement() {
//     // setCounter((prevCounter) => prevCounter + 1);
//     setCounterChanges((prevCounterChanges) => [
//       currentCounter + 1,
//       ...prevCounterChanges,
//     ]);
//   }, []);

//   return (
//     <section className="counter">
//       <p className="counter-info">
//         The initial counter value was <strong>{initialCount}</strong>. It{' '}
//         <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
//       </p>
//       <p>
//         <IconButton icon={MinusIcon} onClick={handleDecrement}>
//           Decrement
//         </IconButton>
//         <CounterOutput value={currentCounter} />
//         <IconButton icon={PlusIcon} onClick={handleIncrement}>
//           Increment
//         </IconButton>
//       </p>
//       <CounterHistory history={counterChanges} />
//     </section>
//   );
// });

// export default Counter;
// **************************************************

// **************************************************
// A-06: Enhances counterChanges to include unique IDs for each entry, ensuring reliable list rendering.
// **************************************************
import { memo, useState, useMemo, useCallback } from 'react';

import { log } from '../../log.js';
import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import CounterHistory from './CounterHistory.jsx';

function isPrime(number) {
  log('Calculating if is prime number', 2, 'other');

  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);

  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  // useEffect(() => {
  //   setCounterChanges([{ value: initialCount, id: Math.random() * 1000 }]);
  // }, [initialCount]);

  // const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState([
    { value: initialCount, id: Math.random() * 1000 },
  ]);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0
  );

  const handleDecrement = useCallback(function handleDecrement() {
    // setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges((prevCounterChanges) => [
      { value: -1, id: Math.random() * 1000 },
      ...prevCounterChanges,
    ]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    // setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges((prevCounterChanges) => [
      { value: 1, id: Math.random() * 1000 },
      ...prevCounterChanges,
    ]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});

export default Counter;
// **************************************************