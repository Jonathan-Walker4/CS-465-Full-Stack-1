const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
    res.render('travel', { title: 'Travel', trips: data.trips });
});

module.exports = router;
