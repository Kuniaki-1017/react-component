const express = require('express');
/* Routerオブジェクト作成 */
const router = express.Router();

/* 商品モデルモジュール読込 */
const item = require('./models/item');

//controllers読込
const HomeController = require('./controllers/HomeController');
const ItemController = require('./controllers/ItemController');
const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');
const RegistController = require('./controllers/RegistController');



//API
/*ホーム*/
router.get('/', HomeController.index);

/*profile*/
router.get('/profile', HomeController.profile);

/* 全商品 */
router.get('/item', ItemController.index);

/* 商品id検索：パスパラメータを受け取り、idにて商品データを表示する */
router.get('/item/:id', ItemController.show);

/* ログイン */
router.get('/login', LoginController.index);

/*処理：postメッソドにて簡単なログイン認証*/
router.post('/auth', LoginController.auth);

/* ユーザページ */
router.get('/user', UserController.index);

/* 処理：ログアウト処理 */
router.get('/user/logout', UserController.logout);

/* ページ：ユーザー登録ページ */
router.get('/regist', RegistController.index);

/* 処理：ユーザー登録 */
router.post('/regist/add', RegistController.add);





/*Routerオブジェクトを外部モジュール化*/
module.exports = router;