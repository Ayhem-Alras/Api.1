

const express = require('express');
const router = express.Router();
const { getTest } = require('../controllers/testController');
const loggerMiddleware = require('../middleware/loggerMiddleware');

router.use(loggerMiddleware);


router.get('/test', getTest);

module.exports = router;
