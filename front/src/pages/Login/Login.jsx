import styled from 'styled-components';


    const base =  750;
    const baseP = 1200;

    // VW
    function gv(number) {
        /*baseを100%ととし、与えられた値の割合を算出し%に直し単位をvwにして返す関数 */
        /*画面幅100%に対して 1vwは1%である。 ということは画面幅100%の内1%=1vwになるので割合%をvwにすると画面幅に応じて可変させてることができる  */
        return ((number / base )* 100 * 1)+"vw";
    }

    function gvP(number) {
    return ((number / baseP )* 100 * 1)+"vw";
    }

    gvP();
    gv();

    console.log('gvP',gvP(100));
    console.log(1);

    // スタイル////
    const LoginWrap = styled.div`
    `;

    const Header = styled.header`
        background-color: #1877F2;
        font-size:${gvP(30)};

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
                <p className="login__txt">ノウハウを資産化し、チームの力を最大限に引き出す。</p>
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
