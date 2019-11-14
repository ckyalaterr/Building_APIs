
const express = require('express');
const chirpsStore = require('../chirpstore');

let router = express.Router();

router.get('/', (req, res)=> {
   res.send('hello');
});

router.post('/', (req, res)=> {
   res.send('posted');
});

router.put('/', (req, res)=> {
  res.send('updated');
});

router.delete('/', (req, res)=> {
  res.send('deleted');
});

//export this router to use in our index.js
module.exports = router;
