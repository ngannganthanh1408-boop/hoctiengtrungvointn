const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Lessons data
const lessons = require('./lessons.json');

app.get('/api/lessons', (req, res) => {
  res.json(lessons);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
