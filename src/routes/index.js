const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('HOLA PAPI');
});

module.exports = router