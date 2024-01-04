//外部ファイルを読み込み、取得するクラス

/* :fsファイルを読み込むモジュール */
const fs = require('fs');

class Model {

    //全てのデータを取得
    get = () => {
        /* JSONファイルをfs.readFileSyncで同期的にファイルを読込 */
        const values = JSON.parse(fs.readFileSync(this.dataFile, 'utf8'));
        return values;
    }

    //IDからデータ取得
    find = (id) => {
        const values = this.get();
        /* findにて渡されたidと一致するオブジェクトを返す※getにてjsonデータparse済 */
        return values.find((value) => {
            return value.id === Number(id);
        });
    }
}

module.exports = Model;