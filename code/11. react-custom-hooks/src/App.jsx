// **************************************************
// A-01: Initialize and set up the basic configuration.
// **************************************************
// import { useRef, useState, useEffect, useCallback } from 'react';

// import logoImage from './assets/logo.png';

// import { sortPlacesByDistance } from './js/location.js';
// import { getAvailablePlacesAsync, getUserSelectedPlacesAsync, updateUserSelectedPlacesAsync } from './js/http.js';

// import Modal from './components/Modal.jsx';
// import Places from './components/Places.jsx';
// import ErrorModal from './components/ErrorModal.jsx';
// import DeleteConfirmation from './components/DeleteConfirmation.jsx';

// function App() {

//   const defaultErrorMessage = 'an unhandled error occurred!';

//   const selectedPlace = useRef();
//   const [error, setError] = useState();
//   const [pickedPlaces, setPickedPlaces] = useState([]);
//   const [isModalOpened, setModalIsOpened] = useState(false);
//   const [availablePlaces, setAvailablePlaces] = useState([]);
//   const hasError = error != null && error != undefined && error != '';

//   useEffect(() => {
//     async function fetchAndSortPlacesAsync() {
//       try {
//         const position = await new Promise((resolve, reject) => {
//           navigator.geolocation.getCurrentPosition(resolve, reject);
//         });
//         const places = await getAvailablePlacesAsync();

//         const sortedPlaces = sortPlacesByDistance(
//           places,
//           position.coords.latitude,
//           position.coords.longitude
//         );

//         setAvailablePlaces(sortedPlaces);

//         const selectedItems = await getUserSelectedPlacesAsync();

//         setPickedPlaces(selectedItems);
//       } catch (error) {
//         setError(error ?? defaultErrorMessage);
//       }
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
//       const place = availablePlaces.find((place) => place.id === id);

//       if (prevPickedPlaces.some((place) => place.id === id)) {
//         return prevPickedPlaces;
//       }

//       return [place, ...prevPickedPlaces];
//     });

//     try {
//       if (pickedPlaces.map(current => current.id).indexOf(id) === -1) {
//         const updatedPlaceIds = [id, ...pickedPlaces.map((current) => current.id)];

//         updateUserSelectedPlacesAsync(updatedPlaceIds);
//       }
//     } catch (error) {
//       console.log(error);
//       setError(error?.message || defaultErrorMessage);

//       setPickedPlaces(pickedPlaces);
//     }
//   }

//   const handleRemovePlace = useCallback(function handleRemovePlace() {
//     setPickedPlaces((prevPickedPlaces) =>
//       prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
//     );

//     setModalIsOpened(false);

//     try {
//       const updatedPlaceIds = pickedPlaces
//         .filter((storedPlaceId) => storedPlaceId != selectedPlace.current)
//         .map(current => current.id);

//       updateUserSelectedPlacesAsync(updatedPlaceIds);

//     } catch (error) {
//       console.log(error);
//       setError(error?.message || defaultErrorMessage);

//       setPickedPlaces(pickedPlaces);
//     }
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
//         {hasError ? (
//           <ErrorModal
//             message={error}
//             onConfirm={() => setError(null)}
//             title='unhandled exception!'
//           />) : (
//           <>
//             <Places
//               title="I'd like to visit ..."
//               fallbackText={'Select the places you would like to visit below.'}
//               places={pickedPlaces}
//               onSelectPlace={handleStartRemovePlace}
//             />
//             <Places
//               title="Available Places"
//               places={availablePlaces}
//               onSelectPlace={handleSelectPlace}
//               fallbackText="sorting places by distance..."
//             />
//           </>)}
//       </main>
//     </>
//   );
// }

// export default App;
// **************************************************

// **************************************************
// A-02: Process input data and apply core transformations using a custom useFetch hook for data fetching and state management.
// **************************************************
import { useRef, useState, useCallback } from 'react';

import logoImage from './assets/logo.png';

import { sortPlacesByDistance } from './js/location.js';
import { getAvailablePlacesAsync, getUserSelectedPlacesAsync, updateUserSelectedPlacesAsync } from './js/http.js';

import useFetch from './hooks/useFetch.jsx';
import Modal from './components/Modal.jsx';
import Places from './components/Places.jsx';
import ErrorModal from './components/ErrorModal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';

function App() {
  const selectedPlace = useRef();
  const userPositionRef = useRef(null);
  const [error, setError] = useState(null);
  const [isModalOpened, setModalIsOpened] = useState(false);

  const fetchUserLocation = async () => {
    const userPosition = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );

    userPositionRef.current = userPosition;
  };

  const {
    data: availablePlaces,
    isFetching: isFetchingAvailablePlaces,
    hasError: fetchingAvailablePlacesHasError,
    errorMessage: fetchingAvailablePlacesErrorMessage,
    setData: setAvailablePlaces,
  } = useFetch({
    fetchDataAsync: getAvailablePlacesAsync,
    defaultValue: [],
    beforeFetchAsync: fetchUserLocation,
    afterFetchAsync: (places) => {
      const position = userPositionRef.current;
      if (!position) {
        return;
      }

      const sorted = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sorted);
    }
  });

  const {
    data: pickedPlaces,
    isFetching: isFetchingPickedPlaces,
    hasError: fetchingPickedPlacesHasError,
    setData: setPickedPlaces,
    errorMessage: fetchingPickedPlacesErrorMessage,
  } = useFetch({
    fetchDataAsync: getUserSelectedPlacesAsync,
    defaultValue: []
  });


  function handleStartRemovePlace(id) {
    setModalIsOpened(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpened(false);
  }

  function handleSelectPlace(id) {
    const place = availablePlaces.find((place) => place.id === id);

    if (!place) {
      return;
    }

    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((p) => p.id === id)) {
        return prevPickedPlaces;
      }

      const updatedPlaces = [place, ...prevPickedPlaces];

      try {
        const updatedIds = updatedPlaces.map((p) => p.id);
        updateUserSelectedPlacesAsync(updatedIds);
      } catch (error) {
        console.error(error);
        setError(error?.message || 'Could not update selected places.');
      }

      return updatedPlaces;
    });
  }

  const handleRemovePlace = useCallback(() => {
    const idToRemove = selectedPlace.current;

    setPickedPlaces((prevPickedPlaces) => {
      const updatedPlaces = prevPickedPlaces.filter((place) => place.id !== idToRemove);

      try {
        const updatedIds = updatedPlaces.map((p) => p.id);
        updateUserSelectedPlacesAsync(updatedIds);
      } catch (error) {
        console.error(error);
        setError(error?.message || 'Could not remove place.');
      }

      return updatedPlaces;
    });

    setModalIsOpened(false);
  }, [setPickedPlaces]);

  return (
    <>
      <Modal open={isModalOpened}>
        {isModalOpened && (
          <DeleteConfirmation
            onCancel={handleStopRemovePlace}
            onConfirm={handleRemovePlace}
            autoConfirmDurationInMs={3000}
          />
        )}
      </Modal>

      <header>
        <img src={logoImage} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or you have visited.
        </p>
      </header>

      <main>
        {error && (
          <ErrorModal
            message={error}
            onConfirm={() => setError(null)}
            title="Unhandled Exception!"
          />
        )}
        {!error && (
          <>
            <Places
              title="I'd like to visit ..."
              fallbackText="Select the places you would like to visit below."
              places={pickedPlaces}
              onSelectPlace={handleStartRemovePlace}
            />
            <Places
              title="Available Places"
              places={availablePlaces}
              onSelectPlace={handleSelectPlace}
              fallbackText="Sorting places by distance..."
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
// **************************************************
