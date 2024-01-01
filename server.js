const express = require('express');
const app = express();
/*外部モジュール:routesの読込*/
const router = require('./routes');
/*外部ファイル:.envの読込 */
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
/*routesの設定 */
app.use(router);




//webサーバーを待機させる
app.listen(port, host, () => {
    console.log('Webサーバ起動');
});