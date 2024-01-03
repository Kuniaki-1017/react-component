const express = require('express');
/* Routerオブジェクト作成 */
const router = express.Router();

/* 商品モデルモジュール読込 */
const item = require('./models/item');

//controllers読込
const HomeController = require('./controllers/HomeController');
const ItemController = require('./controllers/ItemController');



//API
/*ホーム*/
router.get('/', HomeController.index);

/*profile*/
router.get('/profile', HomeController.profile);

/* 全商品 */
router.get('/item', ItemController.index);

/* 商品id検索：パスパラメータを受け取り、idにて商品データを表示する */
router.get('/item/:id', ItemController.show);

/*postメッソドにて簡単なログイン認証*/
router.post('/auth', (req, res) => {
    const login_name = req.body.login_name;
    const password = req.body.password;

    let message = 'ログインできませんでした';
    if (login_name === process.env.LOGIN_NAME && password === process.env.PASSWORD) {
        message = 'ログイン完了';
    }
    res.send(message);
});



/* ログイン */
router.get('/login', (req, res) => {
    let data = {
        title: 'ログイン',
        /* renderでレイアウトを任意指定することも可能 */
        /* views/layouts/login.ejsをレイアウトに指定 */
        layout: 'layouts/login',
    }
    /* views/layouts/login.ejsを読込み、
    bodyの中身はviews/login/index.ejsを読み込み */
    res.render('login/index.ejs', data);
});



/*Routerオブジェクトを外部モジュール化*/
module.exports = router;