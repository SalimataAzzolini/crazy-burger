import styled from 'styled-components';
import PropTypes from 'prop-types'; 


export default function NavbarRigthSide({username}) {
  return (
        <NavBarStyled className="rigth-side"> 
            <h3>Bonjour {username} </h3>
            <button onClick={() => window.location.href = '/'} > Déconnexion </button>
        </NavBarStyled>
  )
}

NavbarRigthSide.propTypes = {
    username: PropTypes.string.isRequired,
}

const NavBarStyled = styled.nav`

    background: pink;
     /* height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center; */
    
`;

