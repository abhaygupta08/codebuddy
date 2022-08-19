const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.route('/').post((req, res, next) => {
    const { body } = req;
    // const url = `https://glot.io/api/run/${language}/latest`;
    const url = `https://glot.io/api/run/${body?.files[0]?.name?.split('.')[1]}/latest`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + '349f7681-2a94-4cb8-92f1-c9dac48a282c'
        }
    };
    options.body = JSON.stringify(body);
    fetch(url, options)
        .then(response => response.json())  
        .then(data => {
            res.send(data);
        }
        )
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        }
        )
});

module.exports = router;