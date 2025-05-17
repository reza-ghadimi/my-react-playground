import express from 'express';
import fs from 'node:fs/promises';
import bodyParser from 'body-parser';


const app = express();


// Serve static files from 'images' directory
app.use(express.static('images'));

// Parse incoming JSON request bodies
app.use(bodyParser.json());

// Enable CORS for all origins and specified methods/headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT', 'OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

// GET /places - return all places data from JSON file
app.get('/places', async (req, res) => {
  const fileContent = await fs.readFile('./data/places.json');

  const placesData = JSON.parse(fileContent);

  res.status(200).json({ places: placesData });
});

// GET /user-places - return places selected by the user based on stored IDs
app.get('/user-places', async (req, res) => {
  const userSelectedPlacesFileContent = await fs.readFile('./data/user-places.json', 'utf-8');
  const userSelectedPlaceIds = JSON.parse(userSelectedPlacesFileContent);

  const allPlacesFileContent = await fs.readFile('./data/places.json', 'utf-8');
  const allPlaces = JSON.parse(allPlacesFileContent);

  // Filter all places to only those selected by user
  const selectedPlaces = allPlaces.filter(place =>
    userSelectedPlaceIds.includes(place.id)
  );

  res.status(200).json({ places: selectedPlaces });
});

// PUT /user-places - update user-selected places IDs in JSON file
app.put('/user-places', async (req, res) => {
  // Remove duplicates from incoming placeIds array
  const distinctPlaceIds = [...new Set(req.body.placeIds)] || [];

  await fs.writeFile('./data/user-places.json', JSON.stringify(distinctPlaceIds));

  res.status(200).json({ message: 'User places updated!' });
});

// Catch-all 404 handler (except for OPTIONS requests)
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

// Start server on port 3000
app.listen(3000);
