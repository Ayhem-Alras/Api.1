

const express = require('express');
const router = express.Router();
const { postData } = require('../controllers/dataController');
const loggerMiddleware = require('../middleware/loggerMiddleware');


router.use(loggerMiddleware);

router.post('/data', postData);

module.exports = router;
