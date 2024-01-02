/* :fsファイルを読み込むモジュール */
const fs = require('fs');

/* JSONファイルパスをdataFIleでエクスポート */
exports.dataFile = "./data/items.json";

/* 全てのitemデータ読込 */
exports.get = () => {
    /* JSONファイルをfs.readFileSyncで同期的にファイルを読込 */
    const values = JSON.parse(fs.readFileSync(this.dataFile, 'utf8'));
    return values;

}

/* idにてitemデータ検索 */
exports.find = (id) => {
    const values = this.get();
    /* findにて渡されたidと一致するオブジェクトを返す※getにてjsonデータparse済 */
    return values.find((value) => {
        return value.id === Number(id);
    });
}

