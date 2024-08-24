const express = require('express');
const router = express.Router();

let dataArray = [];
let clients = [];

// POST route to store data
router.post('/state', (req, res) => {
  const receivedData = req.body;
  dataArray.push(receivedData);

  // Notify all clients
  clients.forEach(client => client.write(`data: ${JSON.stringify(receivedData)}\n\n`));
  res.json({ status: 'Success', receivedData });
});

// GET route to handle SSE
router.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // Add the client to the list
  clients.push(res);

  // Remove the client when the connection is closed
  req.on('close', () => {
    clients = clients.filter(client => client !== res);
  });
});

// GET route to retrieve all data (initial data load)
router.get('/statee', (req, res) => {
  res.json({ status: 'Success', allData: dataArray });
});

module.exports = router;
