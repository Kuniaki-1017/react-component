import styled from 'styled-components';

const Login = () => {
    const Title = styled.h1`
     color:red;
    `;
    
    return(
        <div className="Login">
            <Title>ログインページ</Title>
        </div>
    )
}

export default Login;