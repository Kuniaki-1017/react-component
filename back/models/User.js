/* Modelクラスの読込:外部ファイル(JSON)を読み込み、取得するクラスのモジュール */
// const Model = require('./Model');
const db = require('../lib/db');
/* mysql2にて非同期を行うためのモジュール読込 */
const mysql = require('mysql2/promise');
/* bcryptの読込 */
const bcrypt = require('bcrypt');



class User {

    //ユーザ認証
    auth = async (email, password) => {
        /* クエリを事前作成：emailとpasswordに一致するユーザー */
        const sql = 'SELECT * FROM users WHERE ?;';
        /* 渡されたemaiをオブジェクトで格納 */
        let post = { email: email };
        /* 非同期でdb接続 */
        const con = await mysql.createConnection(db.info);
        /* クエリ結果を格納する変数を定義 */
        let user;
        try {
            /* queryの実行：emailが一致するデータの検索*/
            /*rowsにはqueryの結果が配列で格納される。fieldsにはメタ情報が格納される*/
            const [rows, fields] = await con.query(sql, post);
            /* rows[0]にはquery結果の一番目(行)が入っている */
            user = rows[0];
        } catch (err) {
            console.log('エラー:', err);
        } finally {
            con.end();
        }
        if (user.id && bcrypt.compareSync(password, user.password)) {
            console.log('認証処理1:', user)
            return user;
        }
        return;
    }


    //ユーザ登録
    /* addメソッドを非同期で定義。引数に登録情報を受け取る */
    add = async (post) => {
        /* DB接続：awaitにて接続処理完了を待つ */
        const con = await mysql.createConnection(db.info);
        /* クエリを事前定義：usersテーブルに「?」を挿入 */
        let sql = `INSERT INTO users SET ?;`;
        /* queryの結果を格納する変数を定義 */
        let result;
        /* queryにてDBにアクセスするのでtry・catchでエラーハンドリングできるようにする */
        try {
            /* bcrypt.hashSyncにて受け取ったパスを10回ハッシュ化 */
            post.password = bcrypt.hashSync(post.password, 10);
            /* queryの実行:postで受け取った値(ユーザー情報) */
            result = await con.query(sql, post);

        } catch (err) {
            console.log('エラー:', err)

        } finally {
            con.end();
        }
        /* query結果を返す */
        return result;

    }
}

module.exports = User;