const express = require('express');
const cors = require('cors');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); 
    },
  });
  
  const upload = multer({ storage: storage });
  
  const fs = require('fs');
  const { log } = require('console');
  const uploadsDir = path.join(__dirname, 'uploads');
  
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
  
    console.log('File uploaded successfully:', req.file);
  
    res.json({ status: 'Success', filename: req.file.filename, path: req.file.path });
  });


module.exports = router;

