import styled from 'styled-components';
/* mixinを定義したjsの読込 */
import {gvP,gvB,gv,mediaP, mediaB, media } from '../../mixin';



    // スタイル////
    const LoginWrap = styled.div`
    `;

    const Header = styled.header`
        background-color: #1877F2;
        font-size:${gvP(30)};
        ${mediaP(`
        color:red;
        padding:${gvB(50)};
        `)}

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
        </>
    )
}

export default Login;
