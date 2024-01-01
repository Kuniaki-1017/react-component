const express = require('express');
/* Routerオブジェクト作成 */
const router = express.Router();


//API
/*ホーム*/
router.get('/', (req, res) => {
    res.send('ホーム');
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
    res.send('プロフィール');
});


/*Routerオブジェクトを外部モジュール化*/
module.exports = router;