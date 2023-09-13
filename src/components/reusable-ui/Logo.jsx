import styled from "styled-components";



const Logo = () => {
    return (
        <LogoStylled>
            <h1> BURGER </h1>
            <img src="/images/logo-orange.png" alt="logo" />
            <h1> STORE</h1>
        </LogoStylled>
    );
};

const LogoStylled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(2.5);
    margin-bottom: 20px;
    border :  1px solid blue;



    h1 {
        display: inline;
        text-align: center;
        font-size: 36px;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: 'Amatic SC', cursive;
        color: #ffa01b;

    }

    img{
        object-fit: contain;
        object-position: center;
        height: 60px;
        width: 80px;
        margin: 0 5px;
    }

`;

export default Logo;