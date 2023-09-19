import styled from "styled-components";
import { theme } from "../../theme";
import PropTypes from 'prop-types'; 


const Logo = ({className, onClick}) => {
    return (
        <LogoStylled className={className} onClick={onClick}>
            <h1> CRAZEE </h1>
            <img src="/images/logo-orange.png" alt="logo" />
            <h1> BURGER</h1>
        </LogoStylled>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
}

const LogoStylled = styled.div`
    display: flex;
    align-items: center;
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
    }

`;

export default Logo;