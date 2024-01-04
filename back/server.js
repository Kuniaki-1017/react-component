const express = require('express');
const app = express();
/*外部モジュール:routesの読込*/
const router = require('./routes');
/* ejsレイアウトモジュール読込 */
const layouts = require('express-ejs-layouts');
/*外部ファイル:.envの読込 */
const dotenv = require('dotenv');
dotenv.config();
/* セッションモジュールの読込 */
const session = require('express-session');


/*.envから変数を読み込み*/
const host = process.env.HOST;
const port = process.env.PORT;

//set
/* テンプレートエンジンをejsに設定 */
app.set('view engine', 'ejs');
/* レイアアウトを任意指定 */
app.set('layout', 'layouts/default');


//app.use:ミドルウェアの設定
/*リクエストに対して事前に処理を実行できる*/

/* ejs layout ※注意：ルーティング処理の前に記述*/
app.use(layouts);
/*staticメソッドにて静的ファイルにアクセスできるようにする*/
app.use(express.static(__dirname + '/public'));
/*urlendodedにてPOSTデータのマルチバイトの文字化け防止 */
app.use(express.urlencoded({ extend: true }));
/* セッション登録 ※注意：ルーティング処理の前に記述*/
app.use(session({
    secret: 'secret_key',/* クッキーの署名（秘密鍵みたいなもの）：secretの値は通常ランダムで予測が難しい値にする */
    resave: false,
    saveUninitialized: false
}));
/*routerの設定 */
app.use(router);






//webサーバーを待機させる
app.listen(port, host, () => {
    console.log('Webサーバ起動');
});