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
    let user = {
        id: 1,
        name: '横浜 太郎',
        birthplace: '横浜',
        hobby: ['旅行', 'グルメ', 'スポーツ']
    }
    let data = {};
    data.title = 'プロフィール';
    data.user = user;
    res.render('profile/index.ejs', data);
});

/* 商品id検索：パスパラメータを受け取り、idにて商品データを表示する */
router.get('/item/:id', (req, res) => {
    const id = req.params.id;
    const items = item.get();
    /* 商品検索 */
    let data = {};
    data.item = items.find((item) => {
        return item.id == id
    });
    data.title = '商品情報';
    res.render('item/detail.ejs', data);

});

/* 全商品 */
router.get('/item', (req, res) => {
    let data = {
        title: '商品一覧',
        items: item.get(),
    }
    res.render('item/index.ejs', data);


});

/*Routerオブジェクトを外部モジュール化*/
module.exports = router;