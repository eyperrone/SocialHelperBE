const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/posts', (req, res) => {
    const postsPositionPath = path.join(__dirname, '../data/posts.json');
    fs.readFile(postsPositionPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({error: 'Errore nella lettura del file'});
        } 

        res.json(JSON.parse(data));
    });
});


module.exports = router;

 