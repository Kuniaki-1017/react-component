//user認証処理のモデルを読込
const User = require('../models/User');

/* ログイン */
exports.index = (req, res) => {
    let data = {
        title: 'ログイン',
        /* renderでレイアウトを任意指定することも可能 */
        /* views/layouts/login.ejsをレイアウトに指定 */
        layout: 'layouts/login',
    }
    /* views/layouts/login.ejsを読込み、
    bodyの中身はviews/login/index.ejsを読み込み */
    res.render('login/index.ejs', data);
};

/*簡単なログイン認証*/
exports.auth = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    /* 認証処理 */
    /* Userインスタンス作成 */
    const user = new User();
    /* user.authは通信を行うため非同期で行う */
    const authUser = await user.auth(email, password);
    console.log('認証処理2:', authUser)

    if (authUser) {
        /* ユーザ情報のオブジェクトをセッションのauthUserに登録 */
        req.session.authUser = authUser;
        /* 認証成功したらユーザホームにリダイレクト */
        res.redirect('/user');
    } else {
        /* 認証失敗したらログインページにリダイレクト */
        res.redirect('./login');
    };
};