import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import NavbarRigthSide from './NavbarRigthSide';

import Logo from '../../components/reusable-ui/Logo';

export default function Navbar({ username}) {
  return (
    <NavBarStyled className="navbar">

        <Logo className={"logo-order-page"}/>
        <NavbarRigthSide username={username} />
       
    </NavBarStyled>
  )
}

Navbar.propTypes = {
    username: PropTypes.string.isRequired,
}

const NavBarStyled = styled.nav`

    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 70px 0 20px;

    .left-side{
        background: yellow;
        /* height: 100%;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center; */
    }

    .logo-order-page{
            h1{
                font-size: 40px;
            }

            img{
                height: 100px;
                width: 80px;
                margin: 0 5px;
            }
    }
    
`;