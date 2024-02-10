

//可変サイズ関数////
/* gv,gvP用 */
const baseP = 1360;
const baseB = 768;
const baseS = 375;
/*baseを100%ととし、与えられた値の割合を算出し%に直し単位をvwにして返す関数 */
/*画面幅100%に対して 1vwは1%である。 ということは画面幅100%の内1%=1vwになるので割合%をvwにすると画面幅に応じて可変させてることができる  */
export const gvP = (number) => {
    return ((number / baseP) * 100 * 1) + "vw";
};
export const gvB = (number) => {
    return ((number / baseB) * 100 * 1) + "vw";
};
export const gv = (number) => {
    return ((number / baseS) * 100 * 1) + "vw";
};


//メディアクエリ関数////
/* media用 */
const pc = 1360;
const br = 768;
const sp = 375;
export const mediaP = (content) => {
    return (`@media screen and (max-width: ${pc}px){${content}}`)
}
export const mediaB = (content) => {
    return (`@media screen and (max-width: ${br}px){${content}}`)
}
export const media = (content) => {
    return (`@media screen and (max-width: ${sp}px){${content}}`)
}