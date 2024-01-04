//irem.jsonからitemデータを取得するモジュール読込
const Item = require('../models/item');

/* 全商品 */
exports.index = (req, res) => {
    /* itemインスタンス作成 */
    const item = new Item();
    let data = {
        title: '商品一覧',
        items: item.get(),
    }
    /* layouts/dafaultを読込み、bodyの中身はviews/item/index.ejsを読み込み */
    res.render('item/index.ejs', data);
}

/* 商品id検索：パスパラメータを受け取り、idにて商品データを表示する */
exports.show = (req, res) => {
    /* itemインスタンス作成 */
    const item = new Item();
    /* パスパラメーターのidを取得 */
    const id = req.params.id;
    const items = item.get();
    /* 商品検索 */
    let data = {};
    /* 全itemデータからidと一致するitemを検索、オブジェクトで取得 */
    data.item = items.find((item) => {
        return item.id == id
    });
    data.title = '商品情報';
    /* layouts/dafaultを読込み、bodyの中身はviews/item/detail.ejsを読み込み */
    res.render('item/detail.ejs', data);

}