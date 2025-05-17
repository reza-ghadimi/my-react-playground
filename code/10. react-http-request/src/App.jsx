// **************************************************
// A-01: Static place data with localStorage caching and sorting by user location.
// **************************************************
// import { useRef, useState, useEffect, useCallback } from 'react';

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

//   const handleRemovePlace = useCallback(function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );

//     setModalIsOpened(false);

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   });

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
// A-02: Loads place data asynchronously via fetch, but with timing issues on data availability.
// **************************************************
// import { useRef, useState, useEffect, useCallback } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';

// let allAvailablePlaces;

// fetch("http://localhost:3000/places")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     allAvailablePlaces = data.places;
//   });

// const selectedPlacesCacheKey = 'selectedPlaces';
// const selectedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];
// const selectedItems = selectedPlaceIds.map((selectedPlaceId) =>
//   allAvailablePlaces.find((place) => place.id === selectedPlaceId)
// );

// function App() {

//   const selectedPlace = useRef();
//   const [isModalOpened, setModalIsOpened] = useState(false);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);
//   const [pickedPlaces, setPickedPlaces] = useState(selectedItems);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         allAvailablePlaces,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);
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
//       const place = allAvailablePlaces.find((place) => place.id === id);
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

//   const handleRemovePlace = useCallback(function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );

//     setModalIsOpened(false);

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   });

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
// A-03: Attempts async/await for fetching places, but incorrectly used outside React lifecycle.
// **************************************************
// import { useRef, useState, useEffect, useCallback } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';

// let allAvailablePlaces;

// async function getAvailablePlacesAsync() {
//   const response = await fetch("http://localhost:3000/places");
//   const data = await response.json();
//   allAvailablePlaces = data.places;
// }

// await getAvailablePlacesAsync();

// const selectedPlacesCacheKey = 'selectedPlaces';
// const selectedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];
// const selectedItems = selectedPlaceIds.map((selectedPlaceId) =>
//   allAvailablePlaces.find((place) => place.id === selectedPlaceId)
// );

// function App() {

//   const selectedPlace = useRef();
//   const [allAvailablePlaces, setAllAvailablePlaces] = ([]);
//   const [isModalOpened, setModalIsOpened] = useState(false);
//   const [availablePlaces, sortAvailablePlaces] = useState([]);
//   const [pickedPlaces, setPickedPlaces] = useState(selectedItems);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((userPosition) => {
//       const sortedPlaces = sortPlacesByDistance(
//         allAvailablePlaces,
//         userPosition.coords.latitude,
//         userPosition.coords.longitude
//       )

//       sortAvailablePlaces(sortedPlaces);
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
//       const place = allAvailablePlaces.find((place) => place.id === id);
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

//   const handleRemovePlace = useCallback(function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );

//     setModalIsOpened(false);

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   });

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
// A-04: Correct async fetching inside useEffect with proper state management and geolocation.
// **************************************************
// import { useRef, useState, useEffect, useCallback } from 'react';

// import logoImage from './assets/logo.png';
// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import { sortPlacesByDistance } from './js/location.js';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';

// const selectedPlacesCacheKey = 'selectedPlaces';

// function App() {

//   const selectedPlace = useRef();
//   const [pickedPlaces, setPickedPlaces] = useState([]);
//   const [isModalOpened, setModalIsOpened] = useState(false);
//   const [availablePlaces, setAvailablePlaces] = useState([]);

//   // useEffect(() => {
//   //   fetch("http://localhost:3000/places")
//   //     .then((response) => response.json())
//   //     .then((responseData) => {
//   //       const places = responseData.places;

//   //       navigator.geolocation.getCurrentPosition((userPosition) => {
//   //         const sortedPlaces = sortPlacesByDistance(
//   //           places,
//   //           userPosition.coords.latitude,
//   //           userPosition.coords.longitude
//   //         );

//   //         setAvailablePlaces(sortedPlaces);

//   //        const selectedPlaceIds =
//   //          JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//   //         const selectedItems = selectedPlaceIds
//   //           .map((selectedPlaceId) => places.find((place) => place.id === selectedPlaceId))
//   //           .filter(Boolean); // Filter out invalid IDs if needed

//   //         setPickedPlaces(selectedItems);
//   //       });
//   //     });
//   // }, []);

//   useEffect(() => {
//     async function fetchAndSortPlacesAsync() {
//       const position = await new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//       });

//       const response = await fetch("http://localhost:3000/places");
//       const responseData = await response.json();
//       const places = responseData.places;

//       const sortedPlaces = sortPlacesByDistance(
//         places,
//         position.coords.latitude,
//         position.coords.longitude
//       );

//       setAvailablePlaces(sortedPlaces);

//       const selectedPlaceIds =
//         JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//       const selectedItems = selectedPlaceIds
//         .map((id) => places.find((place) => place.id === id));

//       setPickedPlaces(selectedItems);
//     }

//     fetchAndSortPlacesAsync();
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

//       const place = availablePlaces.find((place) => place.id === id);
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

//   const handleRemovePlace = useCallback(function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );

//     setModalIsOpened(false);

//     const storedPlaceIds = JSON.parse(localStorage.getItem(selectedPlacesCacheKey)) || [];

//     localStorage.setItem(
//       selectedPlacesCacheKey,
//       JSON.stringify(storedPlaceIds.filter((storedPlaceId) => storedPlaceId != selectedPlace.current))
//     );
//   });

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
// A-05: Fully refined async data handling with error management, remote updates, and clean UI state.
// **************************************************
import { useRef, useState, useEffect, useCallback } from 'react';

import logoImage from './assets/logo.png';

import { sortPlacesByDistance } from './js/location.js';
import { getAvailablePlacesAsync, getUserSelectedPlacesAsync, updateUserSelectedPlacesAsync } from './js/http.js';

import Modal from './components/Modal.jsx';
import Places from './components/Places.jsx';
import ErrorModal from './components/ErrorModal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';

function App() {

  const defaultErrorMessage = 'an unhandled error occurred!';

  const selectedPlace = useRef();
  const [error, setError] = useState();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [isModalOpened, setModalIsOpened] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const hasError = error != null && error != undefined && error != '';

  useEffect(() => {
    async function fetchAndSortPlacesAsync() {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const places = await getAvailablePlacesAsync();

        const sortedPlaces = sortPlacesByDistance(
          places,
          position.coords.latitude,
          position.coords.longitude
        );

        setAvailablePlaces(sortedPlaces);

        const selectedItems = await getUserSelectedPlacesAsync();

        setPickedPlaces(selectedItems);
      } catch (error) {
        setError(error ?? defaultErrorMessage);
      }
    }

    fetchAndSortPlacesAsync();
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
      const place = availablePlaces.find((place) => place.id === id);

      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }

      return [place, ...prevPickedPlaces];
    });

    try {
      if (pickedPlaces.map(current => current.id).indexOf(id) === -1) {
        const updatedPlaceIds = [id, ...pickedPlaces.map((current) => current.id)];

        updateUserSelectedPlacesAsync(updatedPlaceIds);
      }
    } catch (error) {
      console.log(error);
      setError(error?.message || defaultErrorMessage);

      setPickedPlaces(pickedPlaces);
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );

    setModalIsOpened(false);

    try {
      const updatedPlaceIds = pickedPlaces
        .filter((storedPlaceId) => storedPlaceId != selectedPlace.current)
        .map(current => current.id);

      updateUserSelectedPlacesAsync(updatedPlaceIds);

    } catch (error) {
      console.log(error);
      setError(error?.message || defaultErrorMessage);

      setPickedPlaces(pickedPlaces);
    }
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
        {hasError ? (
          <ErrorModal
            message={error}
            onConfirm={() => setError(null)}
            title='unhandled exception!'
          />) : (
          <>
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
          </>)}
      </main>
    </>
  );
}

export default App;
// **************************************************
