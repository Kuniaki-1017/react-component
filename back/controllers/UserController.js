const User = require('../models/User');

/* ユーザページ */
exports.index = (req, res) => {
    /* User.authで登録したセッションから情報を取得(認証したユーザオブジェクト) */
    const authUser = req.session.authUser;
    console.log('認証3:', authUser);
    if (!authUser) {
        /*　ユーザが存在しなければログインページにリダイレクト */
        res.redirect('/login');
    };
    /* ユーザデータの受け渡し */
    let data = {
        title: `${authUser.name}のMyPage`,
        user: authUser.name,
    };
    /* layouts/dafaultを読込み、bodyの中身はviews/user/index.ejsを読み込み */
    res.render('user/index', data);
};

/* ログアウト */
exports.logout = (req, res) => {
    /* ユーザセッション削除 */
    delete (req.session.authUser);
    /* ログインページにリダイレクト */
    res.redirect('/login');
};