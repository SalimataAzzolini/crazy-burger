import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import Profile from './Profile';
import ToggleButton from '../../../components/reusable-ui/ToggleButton';


export default function NavbarRigthSide({username}) {
  return (
        <NavBarStyled className="rigth-side">
            <ToggleButton
                // isChecked={false}
                // onToggle={() => console.log("Toggle")}
                labelIfChecked="DÉSACTIVER LE MODE ADMIN"
                labelIfUnchecked="ACTIVER LE MODE ADMIN"
                colorOfBgChecked="#b3ca07"
            />
            
            <Profile username={username}/>
        </NavBarStyled>
  )
}


NavbarRigthSide.propTypes = {
    username: PropTypes.string.isRequired,
}

const NavBarStyled = styled.nav`

    display: flex;
    gap: 50px;
    align-items: center;
    padding-right: 50px;
  

    .profile{
        background: #b3ca07;
    }
    
`;

