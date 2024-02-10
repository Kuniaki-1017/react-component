import styled from 'styled-components';

const Login = () => {
    const LoginWrap = styled.div`
    width
    
    `;
    
    
    return(
        <>
        <header className="header">
            <div className="header__in"><a href="#" className="header__logo">Knouw How</a></div>
        </header>
        <LoginWrap>
            <div className="login__in">
                <div className="login__right">
                <h1 className="login__ttl">Know How</h1>
                <p className="login__txt">ノウハウを資産化し、チームの力を最大限に引き出す。</p>
                </div>
                <div className="login__left">
                    <div className="login__inputArea">
                        <form className="login__form">
                            <input type="text" className="login__mail" placeholder='メールアドレスを入力' />
                            <input type="text" className="login__password" placeholder='パスワードを入力' />
                            <submit className="login__submit" type="submit">ログイン</submit>
                            <a href="#" className="login__registerLink">アカウント作成</a>
                        </form>
                    </div>
                </div>
            </div>
        </LoginWrap>
        </>
    )
}

export default Login;
