// server.js

import express from 'express';
import { json } from 'express';
import userRoutes from './routes/userRoutes.js'; 

const app = express();
app.use(json());


app.use('/users', userRoutes);


app.post('/users', (req, res) => {
    const { username, age, email, password } = req.body;
   
    res.json({ message: 'User created successfully', user: { username, age, email } });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
