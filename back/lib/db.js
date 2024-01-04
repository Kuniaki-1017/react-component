/* DB接続用のデータ定義 */
const dotenv = require('dotenv');
dotenv.config();

exports.info = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
}