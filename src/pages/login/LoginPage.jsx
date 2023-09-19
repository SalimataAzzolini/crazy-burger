import styled from "styled-components";

import LoginForm from "../../components/login/LoginForm";
import Logo from "../../components/reusable-ui/Logo";
import { theme } from "../../theme";


const LoginPage = () => {

    return (
        <LoginPageStyled>
            <Logo className={"logo-login-page"} />
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
        position: relative;


        ::before {
            content: "";
            background : url('/images/burger-background.jpg') rgba(0,0,0,0.7);
            background-size: cover;
            background-position: center;
            background-blend-mode: darken;

            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
        }

        .logo-login-page{
            h1{
                font-size: 110px;
            }

            img{
                height: 240px;
                width: 200px;
                margin: 0 ${theme.gridUnit * 2}px;
            }
        }
    
    `;

export default LoginPage;