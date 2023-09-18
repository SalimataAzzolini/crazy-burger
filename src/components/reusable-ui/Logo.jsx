import styled from "styled-components";
import { theme } from "../../theme";



const Logo = () => {
    return (
        <LogoStylled>
            <h1> CRAZEE </h1>
            <img src="/images/logo-orange.png" alt="logo" />
            <h1> BURGER</h1>
        </LogoStylled>
    );
};

const LogoStylled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* transform: scale(2); */

    h1 {
        display: inline;
        text-align: center;
        font-size: 110px;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: 'Amatic SC', cursive;
        color: ${theme.colors.primary};

    }

    img{
        object-fit: contain;
        object-position: center;
        height: 240px;
        width: 200px;
        margin: 0 ${theme.gridUnit / 2};
    }

`;

export default Logo;