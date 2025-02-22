const express = require('express')


const router =  express.Router();

router.get('/', (req, res) => {
    res.send(' Form MERN Meta blog Routes is running....')
  })

module.exports = router;
