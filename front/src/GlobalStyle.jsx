//全体共通のcss////
import { createGlobalStyle } from "styled-components";
/* mixinを定義したjsの読込 */
import {gvP,gvB,gv,mediaP, mediaB, media } from './mixin';

const GlobalStyle =  createGlobalStyle `

*,*::before,*::after{
    box-sizing:border-box;
}
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
    background-color: #F0F2F5;
    color: #333;
    font-family: "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "游ゴシック", YuGothic, "メイリオ", Meiryo, sans-serif;
    position: relative;
    word-break: break-word;
	width: 100%;
	font-weight: 400;
    font-size: 1.6rem;
    /* gv用css:スクロールバー分はみ出た時用 */
    overflow-x:hidden;
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

    //汎用css///////////////
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
        transition: .3s;
        &:hover{
            opacity:.8;
        }
    }
    
    /*コンテンツラップ*/
    .wrap{
        margin-bottom:${gvP((80))};
        ${mediaP(`
        margin-bottom:${gvP((80))};
        `)}
        ${mediaB(`
        margin-bottom:${gvB((60))};
        `)}
        ${media(`
        margin-bottom:${gv((40))};
        `)}
    }
    /*インナー*/
    .inner{
        width:100%;
        max-width:1300px;
        padding:0 30px;
        margin:0 auto;
        ${mediaP(`
        max-width:${gvP(1300)};
        padding:0 ${gvP(30)};
        `)}
        ${mediaB(`
        max-width:auto;
        padding:0 ${gvB(30)};
        `)}
        ${media(`
        padding:0 ${gvP(20)};
        `)}
    }
}



`;

export default GlobalStyle;