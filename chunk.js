const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.post('/upload', (req, res) => {
  const chunk = req.body.file; // Assumes the chunk is in the request body
  const fileName = req.headers['file-name']; // Pass the original file name in headers
  const chunkIndex = req.headers['chunk-index']; // Pass the chunk index in headers
  const filePath = path.join(__dirname, 'uploads', fileName);

  // Append chunk to the file
  fs.appendFile(filePath, chunk, (err) => {
    if (err) return res.status(500).send('Server error');
    res.send('Chunk received');
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
