const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

//.envから変数を読み込み
const host = process.env.HOST;
const port = process.env.PORT;

//app.use:ミドルウェアの設定
//リクエストに対して事前に処理を実行できる
//staticメソッドにて静的ファイルにアクセスできるようにする
app.use(express.static(__dirname + '/public'));


//API
app.get('/', (req, res) => {
    res.send('ホーム');
});


//webサーバーを待機させる
app.listen(port, host, () => {
    console.log('Webサーバ起動');
});