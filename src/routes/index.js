const express = require('express');
const indexController = require('../controllers/indexController');

let router = express.Router();

router.get('/', indexController.index);



module.exports = router;