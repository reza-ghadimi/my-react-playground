import express from 'express';
import fs from 'node:fs/promises';
import bodyParser from 'body-parser';


const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT', 'OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/places', async (req, res) => {
  const fileContent = await fs.readFile('./data/places.json');

  const placesData = JSON.parse(fileContent);

  res.status(200).json({ places: placesData });
});

app.get('/user-places', async (req, res) => {
  const userSelectedPlacesFileContent = await fs.readFile('./data/user-places.json', 'utf-8');
  const userSelectedPlaceIds = JSON.parse(userSelectedPlacesFileContent);

  const allPlacesFileContent = await fs.readFile('./data/places.json', 'utf-8');
  const allPlaces = JSON.parse(allPlacesFileContent);

  const selectedPlaces = allPlaces.filter(place =>
    userSelectedPlaceIds.includes(place.id)
  );

  res.status(200).json({ places: selectedPlaces });
});

app.put('/user-places', async (req, res) => {
  const distinctPlaceIds = [...new Set(req.body.placeIds)] || [];

  await fs.writeFile('./data/user-places.json', JSON.stringify(distinctPlaceIds));

  res.status(200).json({ message: 'User places updated!' });
});

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(3000);
