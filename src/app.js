const express = require('express');
const app = express();

const PORT = 3005;

app.get('/', (req, res) => {
    res.send('ルート要素のレスポンス');
});

app.listen(PORT, () => {
    console.log('Webサーバー待機中');
});