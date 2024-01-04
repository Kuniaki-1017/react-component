const user = require('../models/user');


/*ホーム*/
exports.index = (req, res) => {
    /* ejsをレンダリング */
    /* layouts/dafaultを読込み、bodyの中身はviews/index.ejsを読み込み */
    const data = {
        title: 'トップページ'
    }
    res.render('index.ejs', data);
};

/*profile*/
exports.profile = (req, res) => {
    let user = {
        id: 1,
        name: '横浜 太郎',
        birthplace: '横浜',
        hobby: ['旅行', 'グルメ', 'スポーツ']
    }
    let data = {};
    data.title = 'プロフィール';
    data.user = user;
    /* layouts/dafaultを読込み、bodyの中身はviews/profile/index.ejsを読み込み */
    res.render('profile/index.ejs', data);
}