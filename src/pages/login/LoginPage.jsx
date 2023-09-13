import styled from "styled-components";

import LoginForm from "../../components/login/LoginForm";
import Logo from "../../components/reusable-ui/Logo";
import { theme } from "../../theme";

const LoginPage = () => {

    return (
        <LoginPageStyled>
            <Logo />
          <LoginForm />
        </LoginPageStyled>
    );
};

const LoginPageStyled = styled.div`
    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    
    `;

export default LoginPage;