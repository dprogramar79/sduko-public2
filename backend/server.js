const express = require('express');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from a .env file if present

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

