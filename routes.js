const express = require('express');
/* Routerオブジェクト作成 */
const router = express.Router();

/* 商品モデルモジュール読込 */
const item = require('./models/item');
const { log } = require('console');


//API
/*ホーム*/
router.get('/', (req, res) => {
    /* ejsをレンダリング */
    res.render('index.ejs');
});

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

/*profile*/
router.get('/profile', (req, res) => {
    const data = {
        title: 'プロフィール'
    }
    res.render('profile/index.ejs', data);
});

/* 商品id検索：パスパラメータを受け取り、idにて商品データを表示する */
router.get('/item/:id', (req, res) => {
    const id = req.params.id;
    /* 商品検索 */
    const selectItem = item.find(id);
    let message = '商品が見つかりませんでした';
    if (selectItem) {
        message = selectItem.name;
    }
    res.send(message);
});

/* 全商品 */
router.get('/item', (req, res) => {
    const values = item.get();

    let newVlalues = '<h2>商品一覧</h2>';
    values.forEach((value) => {
        newVlalues += `<p>${value.name}</p>`;
    });
    res.send(newVlalues);


});

/*Routerオブジェクトを外部モジュール化*/
module.exports = router;