/* Modelクラス読込 */
const Model = require('./Model');

/* Modelクラス継承 */

class Item extends Model {
    /* JSONデータのパス */
    dataFile = './data/items.json';
}

module.exports = Item;

