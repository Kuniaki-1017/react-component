const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('レンタルサーバーを使って、node.jsで作った自作webサーバー接続成功');
});


app.listen(32768, () => {
    console.log('hell');
});
