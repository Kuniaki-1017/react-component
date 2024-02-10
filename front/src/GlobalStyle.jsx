//全体共通のcss////
import { createGlobalStyle } from "styled-components";
/* mixinを定義したjsの読込 */
import {gvP,gvB,gv,mediaP, mediaB, media } from './mixin';

const GlobalStyle =  createGlobalStyle `
html{
    /*1361以上:1rem=10px*/
    font-size:62.5%;

    /*1360まで:1rem=10px*/
    ${mediaP(`
        font-size:${gvP(10)};
    `)}
    /*768まで:1rem=10px*/
    ${mediaB(`
    font-size:${gvB(10)};
    `)}
    /*350まで:1rem=10px*/
    ${media(`
        font-size:${gv(10)};
    `)}
}
body{
    color: #333;
    font-family: "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "游ゴシック", YuGothic, "メイリオ", Meiryo, sans-serif;
    position: relative;
    word-break: break-word;
	width: 100%;
	font-weight: 400;
    font-size: 1.6rem;
    /*1360まで:1rem=10px*/
    ${mediaP(`
        font-size:${gvP(16)};
    `)}
    /*768まで:1rem=10px*/
    ${mediaB(`
    font-size:${gvB(16)};
    `)}
    /*350まで:1rem=10px*/
    ${media(`
        font-size:${gv(16)};
    `)}

    //共通css////

    /*スイッチ*/
    .pc{
        display: block;
        ${mediaP(`
        display: none;
    `)}
    }
    .b{
        display: none;
        ${mediaB(`
        display: block;
    `)}
    }
    .sp{
        display: none;
        ${media(`
        display: block;
    `)}
    }

    /*ボタン*/
    .btn{
        
    }
    /*ホバー*/
    .hover{

    }
 
}



`;

export default GlobalStyle;