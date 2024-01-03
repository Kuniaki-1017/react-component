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

/*postメッソドにて簡単なログイン認証*/
exports.auth = (req, res) => {
    const email = req.params.email;
    const password = req.params.password;
    /* 認証処理 */
    /* Userインスタンス作成 */
    const user = new User();
    const authUser = user.auth(email, password);

    if (authUser) {
        /* 認証成功したらユーザーほむにリダイレクト */
        res.redirect('/user');
    } else {
        /* 認証失敗したらログインページにリリダイレクト */
        res.redirect('./login');
    };
};