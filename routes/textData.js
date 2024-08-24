const express = require('express');
const cors = require('cors');
const router = express.Router();

const app = express();


let storedData = [];

router.post('/text', (req, res) => {
    const receivedData = req.body; 
    storedData.push(receivedData)
    console.log('Data received:', receivedData);
    res.json({ status: 'Success', receivedData });
});

router.get('/text',(req,res)=>{
    if (storedData) {
        res.json(storedData);
    } else {
        res.json({ status: 'No data available' });
    }
});

module.exports = router;

