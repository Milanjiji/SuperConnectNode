const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const textRoutes = require('./routes/textData')
const fileRoutes = require('./routes/fileData')
const states = require('./routes/statemanage')
const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use('/api',textRoutes);
app.use('/api',fileRoutes);
app.use('/api',states);


app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ message: 'Hello from the server!' });
});




app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

