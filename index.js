const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port);