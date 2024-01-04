/* Userモデルの読込:DB接続、ユーザー登録するモジュール */
const User = require('../models/User');

exports.index = (req, res) => {
    const data = {};
    data.title = 'Regist';
    res.render('regist/index', data);
}

/*　ユーザー登録メソッド */
exports.add = async (req, res) => {
    /* ユーザー登録処理:ユーザー登録クラスをインスタンス化 */
    const user = new User();
    /* 非同期処理にてユーザーにて送信された情報を登録 */
    const isSuccess = await user.add(req.body);
    if (isSuccess) {
        /* ログインページにリダイレクト */
        console.log('登録成功', isSuccess)
        res.redirect('/login');
    } else {
        /* user情報がなければ登録ページにリダイレクト */
        console.log('登録失敗')
        res.redirect('/regist');
    }
}