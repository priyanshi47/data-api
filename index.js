// api.js (Node.js Example)
const express = require('express');
const app = express();
const port = 3000;

const data = require('./data.json');  // Import your JSON data

app.get('/api/data', (req, res) => {
  res.json(data);  // Send the data as a JSON response
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
