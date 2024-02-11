import styled from 'styled-components';
/* mixinを定義したjsの読込 */
import {gvP,gvB,gv,mediaP, mediaB, media } from '../../mixin';



    // スタイル////
    const LoginWrap = styled.section`
    display: flex;
    align-items: center;


    .login{

        &__in{
            width: 100%;
            max-width: 1160px;
            padding: 80px 30px;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            
            
            ${mediaP(`
            padding: ${gvP(80)} ${gvP(30)};
            `)}
            ${mediaB(`
            padding: ${gvB(80)} ${gvB(30)};
            width:100%;
            flex-direction:column;
            align-items:center;
            `)}
            ${media(`

            max-width: none;
            padding:${gv(40)} ${gv(20)};
            `)}
        }
        &__left{
            width: 45%;
            ${mediaB(`
                width: 80%;
            `)}
            ${media(`
                 width: 100%;
            `)}
        }
        &__ttl{
            font-size: 3.4rem;
            font-weight:bold;
            ${mediaP(`
                font-size: 3.4rem;
            `)}
            ${mediaB(`
                font-size:3rem;
            `)}
            ${media(`
                font-size: 2.4rem;
            `)}
        }
        &__txt{
            font-size: 2.4rem;
            margin-top: 32px;
            ${mediaP(`
                font-size: 2.4rem;
                margin-top:${gvP(32)};
            `)}
            ${mediaB(`
                font-size:2.1rem;
                margin-top:${gvB(32)};
            `)}
            ${media(`
                font-size: 1.8rem;
                margin-top:${gv(24)};
            `)}
        }
        &__right{
            width: 100%;
            max-width: 400px;
            padding: 40px;
            border:1px solid #707070;
            background-color: #fff;
            border-radius:10px;
            ${mediaP(`
                padding: ${gvP(40)};
            `)}
            ${mediaB(`
                padding: ${gvB(40)};
                max-width: none;
                width: 80%;
                margin-top:${gvB(32)};
            `)}
            ${media(`
                padding: ${gv(24)};
                border-radius:5px;
                width: 100%;
                margin-top:${gv(24)};
            `)}
            
        }
        &__form{
        >input{
            font-size: 2.4rem;
            display: block;
            width: 100%;
            border-radius:10px;
            padding: 8px;
            ${mediaP(`
                font-size: 2.4rem;
            `)}
            ${mediaB(`
                font-size:2.1rem;
            `)}
            ${media(`
                border-radius:5px;
                font-size: 1.8rem;
            `)}
            }
        }
        &__mail{
            border:1px solid #707070;
            background-color: #fff;
        }
        &__password{
            border:1px solid #707070;
            background-color: #fff;
            margin-top: 16px;
            ${mediaP(`
                margin-top: ${gvP(16)};
            `)}
            ${mediaB(`
                margin-top: ${gvB(16)};
            `)}
            ${media(`
                margin-top: ${gv(8)};
            `)}
        }
        
        &__submit{
            font-size: 2.4rem;
            font-weight: bold;
            color:#fff;
            border:none;
            background-color: #1877F2;
            margin-top: 32px;
            cursor:pointer;
            transition:.3s;
            &:hover{
                opacity:.7;
            }
            ${mediaP(`
                margin-top: ${gvP(32)};
            `)}
            ${mediaB(`
                margin-top: ${gvB(32)};
            `)}
            ${media(`
                margin-top: ${gv(16)};
            `)}
        }
        &__registerBtn{
            max-width: 240px;
            background-color: #42B72A;
            font-size: 2.4rem;
            font-weight: bold;
            color:#fff;
            border:none;
            border-radius:10px;
            padding: 8px;
            margin: 48px auto 0;
            text-align: center;
            transition:.3s;
            &:hover{
                opacity: 0.7;
            }
            ${mediaP(`
                margin: ${gvP(48)} auto 0;
                font-size: 2.4rem;
            `)}
            ${mediaB(`
                margin: ${gvB(48)} auto 0;
                font-size: 2.1rem;
            `)}
            ${media(`
                border-radius:5px;
                margin: ${gv(24)} auto 0;
                font-size: 1.8rem;
            `)}
        }
    }`;


    const Header = styled.header`
    background-color: #1877F2;
    height: 80px;
    line-height: 80px;
    
    ${mediaP(`
    height: ${gvP(80)};
    line-height:  ${gvP(80)};
    font-size:${gvP(36)};
    `)}
    ${mediaB(`
    height: ${gvB(80)};
    line-height:  ${gvB(80)};
    `)}
    ${media(`
    height: ${gv(60)};
    line-height:  ${gv(60)};
    `)}



    .header{ 
        &__in{
            padding: 0 30px;
            ${mediaP(`
            padding:0 ${gvP(30)};
            `)}
            ${mediaB(`
                padding:0 ${gvB(30)};
            `)}
            ${media(`
                padding:0 ${gv(20)};
            `)}
        }

        &__logo{
            font-size: 3.4rem;
            color:#fff;
            font-weight:bold;
            ${mediaP(`
                font-size: 3.4rem;
            `)}
            ${mediaB(`
                font-size:3rem;
            `)}
            ${media(`
                font-size: 2.4rem;
            `)}
        }
    }`;

    const Footer = styled.footer`
    background-color: #1877F2;
    height: 80px;
    line-height: 80px;
    text-align:center;
    ${mediaP(`
    height: ${gvP(80)};
    line-height:  ${gvP(80)};
    `)}
    ${mediaB(`
    height: ${gvB(80)};
    line-height:  ${gvB(80)};
    `)}
    ${media(`
    height: ${gv(60)};
    line-height:  ${gv(60)};
    `)}

    .footer{
        &__copy{
            font-size:1.8rem;
            color:#fff;
            ${mediaP(`
            font-size:1.8rem;
            `)}
            ${mediaB(`
            font-size:1.6rem;
            `)}
            ${media(`
            font-size:1.4rem;
            `)}
        }
        &__copy-mark{
            font-size:1.8rem;
            margin:0 4px;
            vertical-align:middle;
            ${mediaP(`
            font-size:1.8rem;
            `)}
            ${mediaB(`
            font-size:1.6rem;
            `)}
            ${media(`
            font-size:1.4rem;
            `)}
        }
    }
    `;
    
const Login = () => {
    
    return(
        <>
        <Header className="header">
            <div className="header__in"><a href="#" className="header__logo">Knouw How</a></div>
        </Header>
        <LoginWrap className="login">
            <div className="login__in">
                <div className="login__left">
                <h1 className="login__ttl">Know How</h1>
                <p className="login__txt">ノウハウを資産化し、<br/>チームの力を最大限に引き出す。</p>
                </div>
                <div className="login__right">
                    <form className="login__form">
                        <input type="text" className="login__mail" placeholder='メールアドレスを入力' />
                        <input type="text" className="login__password" placeholder='パスワードを入力' />
                        <input className="login__submit" type="submit" value="ログイン"/>
                        <a href="#" className="login__registerBtn">アカウント作成</a>
                    </form>
                </div>
            </div>
        </LoginWrap>
        <Footer className='footer'>
            <small className="footer__copy">Know How<span className="footer__copy-mark">&copy;</span>2024</small>
        </Footer>
        </>
    )
}

export default Login;
