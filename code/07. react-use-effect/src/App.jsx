// **************************************************
// A-01: This version sets up the basic app with modal functionality and state to track selected places for deletion.
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
// A-02: A simple version that renders places and sorts them by proximity to the user's location but doesn't have any modal or deletion logic.
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
// A-03: Adds state handling for tracking a selected place and triggers a modal on selection for removal.
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
// A-04: Caching selected places in localStorage.
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
// A-05/00: Use cached detail to show on startup to set availablePlaces (via useEffect).
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

//   // Run once on component mount to fetch user location and sort places by distance
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
// A-05/01: Avoid unnecessary use of useEffect for simple logic; handle without side effects.
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

//   // Trigger re-render when state changes
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
// A-05/02: Run once on component mount (fix re-render issue when state changes)
// **************************************************
// import { useRef, useState, useEffect } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { AVAILABLE_PLACES } from './data.js';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';


// // Run only once when the component is first mounted
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
// A-06: Introduces open state to control modal visibility declaratively (instead of using ref).
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
// A-07/01: Adds auto-confirm feature for modal with a delay.
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
//           autoConfirmDurationInMs={3000}
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
// A-07/02: Cleaned up modal handling, ensuring the auto-confirm feature works with proper delays.
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
//           autoConfirmDurationInMs={3000}
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
// A-07/03:  Refactored handleRemovePlace to use useCallback for better performance and memoization.
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
          autoConfirmDurationInMs={3000}
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