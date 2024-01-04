//DB接続モジュール

/* mysqlモジュール読込 */
const mysql = require('mysql2');
/* db接続情報を読込 */
const db = require('../lib/db');

/* データベース接続 */
const con = mysql.createConnection(db.info);
/* db接続後の処理を.connectで実行 */
con.connect((err) => {
    if (err) {
        console.log('DBエラー:', err);
    } else {
        console.log('データベース接続');
    }
});
/* データベース接続解除 */
con.end();

