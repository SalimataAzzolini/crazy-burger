import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import Profile from './Profile';


export default function NavbarRigthSide({username}) {
  return (
        <NavBarStyled className="rigth-side">
            {/* <div className="admin-button"> Admin Button</div> */}
            
            <Profile username={username}/>
        </NavBarStyled>
  )
}


NavbarRigthSide.propTypes = {
    username: PropTypes.string.isRequired,
}

const NavBarStyled = styled.nav`

    display: flex;
    align-items: center;
    padding-right: 50px;
  

    /* .admin-button{
        background: #495110;
    } */

    .profile{
        background: #b3ca07;
    }
    
`;

