const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;


app.get('/', (req, res) => {
    res.send('ルートのAPI');
});

app.listen(port, host, () => {
    console.log('Webサーバー起動');
});