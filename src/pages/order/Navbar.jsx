import styled from 'styled-components';
import PropTypes from 'prop-types'; 

export default function Navbar({ username}) {
  return (
    <NavBarStyled className="navbar"> 
        <h3>Bonjour {username} </h3>
        <button onClick={() => window.location.href = '/'} > Déconnexion </button>
    </NavBarStyled>
  )
}

Navbar.propTypes = {
    username: PropTypes.string.isRequired,
}

const NavBarStyled = styled.nav`

    background: blue;
    height: 10vh;
    
`;