// **************************************************
// A-01:
// **************************************************
// import { useRef, useState } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';

// function App() {
//   const modal = useRef();
//   const selectedPlace = useRef();
//   const [pickedPlaces, setPickedPlaces] = useState([]);

//   function handleStartRemovePlace(id) {
//     modal.current.open();
//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     modal.current.close();
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );
//     modal.current.close();
//   }

//   return (
//     <>
//       <Modal ref={modal}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={AVAILABLE_PLACES}
//           onSelectPlace={handleSelectPlace}
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// A-02:
// **************************************************
// import { useRef, useState } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';

// function App() {
//   const modal = useRef();
//   const selectedPlace = useRef();
//   const [count, setCount] = useState(0);
//   const [pickedPlaces, setPickedPlaces] = useState([]);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);

//   navigator.geolocation.getCurrentPosition((userPosition) => {
//     const sortedPlaces = sortPlacesByDistance(
//       AVAILABLE_PLACES,
//       userPosition.coords.latitude,
//       userPosition.coords.longitude
//     )

//     sortAvailablePlaces(sortedPlaces);

//     setCount(prevValue => prevValue + 1)

//     console.log(`${count}. Here we are agian!`);
//   });

//   function handleStartRemovePlace(id) {
//     modal.current.open();
//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     modal.current.close();
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );
//     modal.current.close();
//   }

//   return (
//     <>
//       <Modal ref={modal}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={availablePlaces}
//           onSelectPlace={handleSelectPlace}
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// A-03:
// **************************************************
// import { useRef, useState, useEffect } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';

// function App() {
//   const modal = useRef();
//   const selectedPlace = useRef();
//   const [count, setCount] = useState(0);
//   const [pickedPlaces, setPickedPlaces] = useState([]);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);

//   // once, after App component execuation
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         AVAILABLE_PLACES,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);

//       setCount(prevValue => prevValue + 1)

//       console.log(`${count}. Here we are agian!`);
//     });
//   }, []);

//   function handleStartRemovePlace(id) {
//     modal.current.open();
//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     modal.current.close();
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );
//     modal.current.close();
//   }

//   return (
//     <>
//       <Modal ref={modal}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={availablePlaces}
//           onSelectPlace={handleSelectPlace}
//           fallbackText="sorting places by distance..."
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************


// **************************************************
// A-04:
// **************************************************
// import { useRef, useState, useEffect } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';

// function App() {

//   const selectedPlacesCacheKey = 'selectedPlaces';

//   const modal = useRef();
//   const selectedPlace = useRef();
//   const [count, setCount] = useState(0);
//   const [pickedPlaces, setPickedPlaces] = useState([]);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);

//   // once, after App component execuation
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         AVAILABLE_PLACES,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);

//       setCount(prevValue => prevValue + 1)

//       console.log(`${count}. Here we are agian!`);
//     });
//   }, []);

//   function handleStartRemovePlace(id) {
//     modal.current.open();
//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     modal.current.close();
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     if (storedPlaceIds.indexOf(id) === -1) {
//       localStorage.setItem(
//         selectedPlacesCacheKey,
//         JSON.stringify([id, ...storedPlaceIds])
//       );
//     }
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );
//     modal.current.close();

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   }

//   return (
//     <>
//       <Modal ref={modal}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={availablePlaces}
//           onSelectPlace={handleSelectPlace}
//           fallbackText="sorting places by distance..."
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// A-05/00:
// **************************************************
// import { useRef, useState, useEffect } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';

// function App() {

//   const selectedPlacesCacheKey = 'selectedPlaces';

//   const modal = useRef();
//   const selectedPlace = useRef();
//   const [count, setCount] = useState(0);
//   const [pickedPlaces, setPickedPlaces] = useState([]);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);

//   // once, after App component execuation
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         AVAILABLE_PLACES,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);

//       setCount(prevValue => prevValue + 1)

//       console.log(`${count}. Here we are agian!`);
//     });
//   }, []);

//   useEffect(() => {
//     const selectedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     const selectedItems = selectedPlaceIds.map((selectedPlaceId) =>
//       AVAILABLE_PLACES.find((place) => place.id === selectedPlaceId)
//     );

//     setPickedPlaces(selectedItems);
//   }, []);

//   function handleStartRemovePlace(id) {
//     modal.current.open();
//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     modal.current.close();
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     if (storedPlaceIds.indexOf(id) === -1) {
//       localStorage.setItem(
//         selectedPlacesCacheKey,
//         JSON.stringify([id, ...storedPlaceIds])
//       );
//     }
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );
//     modal.current.close();

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   }

//   return (
//     <>
//       <Modal ref={modal}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={availablePlaces}
//           onSelectPlace={handleSelectPlace}
//           fallbackText="sorting places by distance..."
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// A-05/01:
// **************************************************
// import { useRef, useState, useEffect } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';

// function App() {

//   const selectedPlacesCacheKey = 'selectedPlaces';

//   // Re-Run after each change state
//   const selectedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];
//   const selectedItems = selectedPlaceIds.map((selectedPlaceId) =>
//     AVAILABLE_PLACES.find((place) => place.id === selectedPlaceId)
//   );

//   const modal = useRef();
//   const selectedPlace = useRef();
//   const [count, setCount] = useState(0);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);
//   const [pickedPlaces, setPickedPlaces] = useState(selectedItems);

//   // once, after App component execuation
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         AVAILABLE_PLACES,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);

//       setCount(prevValue => prevValue + 1)

//       console.log(`${count}. Here we are agian!`);
//     });
//   }, []);

//   function handleStartRemovePlace(id) {
//     modal.current.open();
//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     modal.current.close();
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     if (storedPlaceIds.indexOf(id) === -1) {
//       localStorage.setItem(
//         selectedPlacesCacheKey,
//         JSON.stringify([id, ...storedPlaceIds])
//       );
//     }
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );
//     modal.current.close();

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   }

//   return (
//     <>
//       <Modal ref={modal}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={availablePlaces}
//           onSelectPlace={handleSelectPlace}
//           fallbackText="sorting places by distance..."
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// A-05/02:
// **************************************************
// import { useRef, useState, useEffect } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';


// // Run only in the first time of execution
// const selectedPlacesCacheKey = 'selectedPlaces';
// const selectedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];
// const selectedItems = selectedPlaceIds.map((selectedPlaceId) =>
//   AVAILABLE_PLACES.find((place) => place.id === selectedPlaceId)
// );

// function App() {

//   const modal = useRef();
//   const selectedPlace = useRef();
//   const [count, setCount] = useState(0);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);
//   const [pickedPlaces, setPickedPlaces] = useState(selectedItems);

//   // once, after App component execuation
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         AVAILABLE_PLACES,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);

//       setCount(prevValue => prevValue + 1)

//       console.log(`${count}. Here we are agian!`);
//     });
//   }, []);

//   function handleStartRemovePlace(id) {
//     modal.current.open();
//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     modal.current.close();
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     if (storedPlaceIds.indexOf(id) === -1) {
//       localStorage.setItem(
//         selectedPlacesCacheKey,
//         JSON.stringify([id, ...storedPlaceIds])
//       );
//     }
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );
//     modal.current.close();

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   }

//   return (
//     <>
//       <Modal ref={modal}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={availablePlaces}
//           onSelectPlace={handleSelectPlace}
//           fallbackText="sorting places by distance..."
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************


// **************************************************
// A-06:
// **************************************************
// import { useRef, useState, useEffect } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';


// // Run only in the first time of execution
// const selectedPlacesCacheKey = 'selectedPlaces';
// const selectedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];
// const selectedItems = selectedPlaceIds.map((selectedPlaceId) =>
//   AVAILABLE_PLACES.find((place) => place.id === selectedPlaceId)
// );

// function App() {

//   const selectedPlace = useRef();
//   const [count, setCount] = useState(0);
//   const [isModalOpened, setModalIsOpened] = useState(false);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);
//   const [pickedPlaces, setPickedPlaces] = useState(selectedItems);

//   // once, after App component execuation
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         AVAILABLE_PLACES,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);

//       setCount(prevValue => prevValue + 1)

//       console.log(`${count}. Here we are agian!`);
//     });
//   }, []);

//   function handleStartRemovePlace(id) {
//     setModalIsOpened(true);

//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     setModalIsOpened(false);
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     if (storedPlaceIds.indexOf(id) === -1) {
//       localStorage.setItem(
//         selectedPlacesCacheKey,
//         JSON.stringify([id, ...storedPlaceIds])
//       );
//     }
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );

//     setModalIsOpened(false);

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   }

//   return (
//     <>
//       <Modal open={isModalOpened}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={availablePlaces}
//           onSelectPlace={handleSelectPlace}
//           fallbackText="sorting places by distance..."
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************


// **************************************************
// A-07/00:
// **************************************************
// import { useRef, useState, useEffect } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';


// const selectedPlacesCacheKey = 'selectedPlaces';
// const selectedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];
// const selectedItems = selectedPlaceIds.map((selectedPlaceId) =>
//   AVAILABLE_PLACES.find((place) => place.id === selectedPlaceId)
// );

// function App() {

//   const selectedPlace = useRef();
//   const [count, setCount] = useState(0);
//   const [isModalOpened, setModalIsOpened] = useState(false);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);
//   const [pickedPlaces, setPickedPlaces] = useState(selectedItems);

//   // once, after App component execuation
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         AVAILABLE_PLACES,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);

//       setCount(prevValue => prevValue + 1)

//       console.log(`${count}. Here we are agian!`);
//     });
//   }, []);

//   function handleStartRemovePlace(id) {
//     setModalIsOpened(true);

//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     setModalIsOpened(false);
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     if (storedPlaceIds.indexOf(id) === -1) {
//       localStorage.setItem(
//         selectedPlacesCacheKey,
//         JSON.stringify([id, ...storedPlaceIds])
//       );
//     }
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );

//     setModalIsOpened(false);

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   }

//   return (
//     <>
//       <Modal open={isModalOpened}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={availablePlaces}
//           onSelectPlace={handleSelectPlace}
//           fallbackText="sorting places by distance..."
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// A-07/01:
// **************************************************
// import { useRef, useState, useEffect } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';


// const selectedPlacesCacheKey = 'selectedPlaces';
// const selectedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];
// const selectedItems = selectedPlaceIds.map((selectedPlaceId) =>
//   AVAILABLE_PLACES.find((place) => place.id === selectedPlaceId)
// );

// function App() {

//   const selectedPlace = useRef();
//   const [count, setCount] = useState(0);
//   const [isModalOpened, setModalIsOpened] = useState(false);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);
//   const [pickedPlaces, setPickedPlaces] = useState(selectedItems);

//   // once, after App component execuation
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         AVAILABLE_PLACES,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);

//       setCount(prevValue => prevValue + 1)

//       console.log(`${count}. Here we are agian!`);
//     });
//   }, []);

//   function handleStartRemovePlace(id) {
//     setModalIsOpened(true);

//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     setModalIsOpened(false);
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     if (storedPlaceIds.indexOf(id) === -1) {
//       localStorage.setItem(
//         selectedPlacesCacheKey,
//         JSON.stringify([id, ...storedPlaceIds])
//       );
//     }
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );

//     setModalIsOpened(false);

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   }

//   return (
//     <>
//       <Modal open={isModalOpened}>
//         {isModalOpened && <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//           automaticConfirmationTimeInMillisecond={3000}
//         />}
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={availablePlaces}
//           onSelectPlace={handleSelectPlace}
//           fallbackText="sorting places by distance..."
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************


// **************************************************
// A-07/02:
// **************************************************
// import { useRef, useState, useEffect } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';


// const selectedPlacesCacheKey = 'selectedPlaces';
// const selectedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];
// const selectedItems = selectedPlaceIds.map((selectedPlaceId) =>
//   AVAILABLE_PLACES.find((place) => place.id === selectedPlaceId)
// );

// function App() {

//   const selectedPlace = useRef();
//   const [count, setCount] = useState(0);
//   const [isModalOpened, setModalIsOpened] = useState(false);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);
//   const [pickedPlaces, setPickedPlaces] = useState(selectedItems);

//   // once, after App component execuation
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         AVAILABLE_PLACES,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);

//       setCount(prevValue => prevValue + 1)

//       console.log(`${count}. Here we are agian!`);
//     });
//   }, []);

//   function handleStartRemovePlace(id) {
//     setModalIsOpened(true);

//     selectedPlace.current = id;
//   }

//   function handleStopRemovePlace() {
//     setModalIsOpened(false);
//   }

//   function handleSelectPlace(id) {
//     setPickedPlaces((prevPickedPlaces) => {
//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }
//       const place = AVAILABLE_PLACES.find((place) => place.id === id);
//       return [place, ...prevPickedPlaces];
//     });

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     if (storedPlaceIds.indexOf(id) === -1) {
//       localStorage.setItem(
//         selectedPlacesCacheKey,
//         JSON.stringify([id, ...storedPlaceIds])
//       );
//     }
//   }

//   function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );

//     setModalIsOpened(false);

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   }

//   return (
//     <>
//       <Modal open={isModalOpened}>
//         {isModalOpened && <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//           automaticConfirmationTimeInMillisecond={3000}
//         />}
//       </Modal>

//       <header>
//         <img src={logoImage} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText={'Select the places you would like to visit below.'}
//           places={pickedPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />
//         <Places
//           title="Available Places"
//           places={availablePlaces}
//           onSelectPlace={handleSelectPlace}
//           fallbackText="sorting places by distance..."
//         />
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************


// **************************************************
// A-07/03:
// **************************************************
import { useRef, useState, useEffect, useCallback } from 'react';

import logoImage from './assets/logo.png';
import Modal from './components/Modal.jsx';
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import { sortPlacesByDistance } from './js/location.js';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';


const selectedPlacesCacheKey = 'selectedPlaces';
const selectedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];
const selectedItems = selectedPlaceIds.map((selectedPlaceId) =>
  AVAILABLE_PLACES.find((place) => place.id === selectedPlaceId)
);

function App() {

  const selectedPlace = useRef();
  const [count, setCount] = useState(0);
  const [isModalOpened, setModalIsOpened] = useState(false);
  const [availablePlaces, sortAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(selectedItems);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((userPosition) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        userPosition.coords.latitude,
        userPosition.coords.longitude
      )

      sortAvailablePlaces(sortedPlaces);

      setCount(prevValue => prevValue + 1)

      console.log(`${count}. Here we are agian!`);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setModalIsOpened(true);

    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpened(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

    if (storedPlaceIds.indexOf(id) === -1) {
      localStorage.setItem(
        selectedPlacesCacheKey,
        JSON.stringify([id, ...storedPlaceIds])
      );
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );

    setModalIsOpened(false);

    const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

    localStorage.setItem(
      selectedPlacesCacheKey,
      JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
    );
  });

  return (
    <>
      <Modal open={isModalOpened}>
        {isModalOpened && <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
          automaticConfirmationTimeInMillisecond={3000}
        />}
      </Modal>

      <header>
        <img src={logoImage} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
          fallbackText="sorting places by distance..."
        />
      </main>
    </>
  );
}

export default App;
// **************************************************