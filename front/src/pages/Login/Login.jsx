import styled from 'styled-components';
/* mixinを定義したjsの読込 */
import {gvP,gvB,gv,mediaP, mediaB, media } from '../../mixin';



    // スタイル////
    const LoginWrap = styled.div`
    `;


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
 
            color:#fff;
        }
        &__copy-mark{
            font-size:1.8rem;
            margin:0 4px;
            vertical-align:middle;
        }
    }
    `;
    
const Login = () => {
    
    return(
        <>
        <Header className="header">
            <div className="header__in"><a href="#" className="header__logo">Knouw How</a></div>
        </Header>
        <LoginWrap>
            <div className="login__in">
                <div className="login__right">
                <h1 className="login__ttl">Know How</h1>
                <p className="login__txt sp">ノウハウを資産化し、チームの力を最大限に引き出す。</p>
                </div>
                <div className="login__left">
                    <div className="login__inputArea">
                        <form className="login__form">
                            <input type="text" className="login__mail" placeholder='メールアドレスを入力' />
                            <input type="text" className="login__password" placeholder='パスワードを入力' />
                            <input className="login__submit" type="submit" value="ログイン"/>
                            <a href="#" className="login__regiPsterLink">アカウント作成</a>
                        </form>
                    </div>
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
