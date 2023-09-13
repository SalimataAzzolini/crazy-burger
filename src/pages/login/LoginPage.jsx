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

        ::before {
            background : url('/public/images/burger-background.jpg') rgba(0,0,0,0.7);
            background-size: cover;
            background-position: center;
            background-blend-mode: darken;

            content: "avant";
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
        }
    
    `;

export default LoginPage;