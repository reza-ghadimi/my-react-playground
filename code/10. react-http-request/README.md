
---

# Express Backend with JSON Storage & React API Integration

## Project Overview

This project demonstrates building a simple, file-based RESTful API using **Express.js** to perform full **CRUD** (Create, Read, Update, Delete) operations on data stored in a JSON file. It also includes concise examples illustrating how to consume these API endpoints from a **React** frontend using the Fetch API.

---

## Backend Setup

### 1. Initialize Project & Install Dependencies

Create a new Node.js project and install required packages:

```bash
mkdir express-crud-backend
cd express-crud-backend
npm init -y
npm install express body-parser
```

---

### 2. Project Structure

```
express-crud-backend/
├── data/
│   └── items.json        # JSON file for storing data
├── index.js              # Main Express server file
├── package.json
```

---

### 3. Sample Data (`data/items.json`)

```json
[
  { "id": 1, "name": "Sample Item 1" },
  { "id": 2, "name": "Sample Item 2" }
]
```

---

### 4. Express Server Implementation (`index.js`)

```js
import express from 'express';
import fs from 'node:fs/promises';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const DATA_PATH = './data/items.json';

// Utility functions for reading and writing data
const readItems = async () => {
  const jsonData = await fs.readFile(DATA_PATH, 'utf-8');
  return JSON.parse(jsonData);
};

const writeItems = async (items) => {
  await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2));
};

// GET /items - Retrieve all items
app.get('/items', async (req, res) => {
  try {
    const items = await readItems();
    res.status(200).json({ items });
  } catch {
    res.status(500).json({ error: 'Failed to retrieve items' });
  }
});

// POST /items - Create a new item
app.post('/items', async (req, res) => {
  try {
    const items = await readItems();
    const newItem = {
      id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
      name: req.body.name,
    };
    items.push(newItem);
    await writeItems(items);
    res.status(201).json({ message: 'Item created successfully', item: newItem });
  } catch {
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// PUT /items/:id - Update an existing item by ID
app.put('/items/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const items = await readItems();
    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }

    items[index].name = req.body.name ?? items[index].name;
    await writeItems(items);

    res.status(200).json({ message: 'Item updated successfully', item: items[index] });
  } catch {
    res.status(500).json({ error: 'Failed to update item' });
  }
});

// DELETE /items/:id - Remove an item by ID
app.delete('/items/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const items = await readItems();
    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }

    items.splice(index, 1);
    await writeItems(items);

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

// Handle 404 errors for unmatched routes
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

### 5. Running the Backend

```bash
node index.js
```

Your backend will be available at `http://localhost:4000`.

---

## React Frontend: API Consumption Examples

Below are simple functions using `fetch` to interact with the backend endpoints.

### 1. Fetch All Items

```js
async function fetchItems() {
  const response = await fetch('http://localhost:4000/items');
  if (!response.ok) throw new Error('Network response was not ok');
  const data = await response.json();
  return data.items;
}
```

### 2. Create New Item

```js
async function createItem(name) {
  const response = await fetch('http://localhost:4000/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) throw new Error('Failed to create item');
  const data = await response.json();
  return data.item;
}
```

### 3. Update Existing Item

```js
async function updateItem(id, name) {
  const response = await fetch(`http://localhost:4000/items/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) throw new Error('Failed to update item');
  const data = await response.json();
  return data.item;
}
```

### 4. Delete Item

```js
async function deleteItem(id) {
  const response = await fetch(`http://localhost:4000/items/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error('Failed to delete item');
  const data = await response.json();
  return data.message;
}
```

---

## Summary

* **Backend**: Express.js REST API with CRUD operations on JSON file storage.
* **Frontend**: React-friendly API interaction using `fetch`.
* **Endpoints**:

  * `GET /items` — List all items
  * `POST /items` — Create new item
  * `PUT /items/:id` — Update item by ID
  * `DELETE /items/:id` — Delete item by ID

---
