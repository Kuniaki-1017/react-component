const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

/*.envから変数を読み込み*/
const host = process.env.HOST;
const port = process.env.PORT;

//app.use:ミドルウェアの設定
/*リクエストに対して事前に処理を実行できる*/
/*staticメソッドにて静的ファイルにアクセスできるようにする*/
app.use(express.static(__dirname + '/public'));
/*urlendodedにてPOSTデータのマルチバイトの文字化け防止 */
app.use(express.urlencoded({ extend: true }));


//API

app.get('/', (req, res) => {
    res.send('ホーム');
});


/*postメッソドにて簡単なログイン認証*/
app.post('/auth', (req, res) => {
    const login_name = req.body.login_name;
    const password = req.body.password;

    let message = 'ログインできませんでした';
    if (login_name === process.env.LOGIN_NAME && password === process.env.PASSWORD) {
        message = 'ログイン完了';
    }
    res.send(message);
});


//webサーバーを待機させる
app.listen(port, host, () => {
    console.log('Webサーバ起動');
});