

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {

  res.json({ message: 'Get users route' });
});

router.post('/', (req, res) => {

  res.json({ message: 'Create user route' });
});

export default router;
