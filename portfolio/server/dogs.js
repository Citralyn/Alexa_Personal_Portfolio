const express = require('express'); // import express
const dog = express(); // create an express object (can call it anything)

module.exports = dog

dog.get('/', (req, res) => {
    res.send('Welcomedog!');
});