const Model = require('./Model');

class User extends Model {
    dataFile = './data/users.json';

    /* 認証処理 */
    auth = (email, password) => {
        return this.get().find((value) => {
            return value.email == email && value.password == password;
        });
    }

}

module.exports = User;