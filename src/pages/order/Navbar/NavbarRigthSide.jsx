import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {FaUserSecret} from 'react-icons/fa';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ToggleButton from '../../../components/reusable-ui/ToggleButton';
import { theme } from '../../../theme';
import Profile from './Profile';
import { useState } from 'react';



export default function NavbarRigthSide({username}) {

    const [isModeAdmin, setIsModeAdmin] = useState(false);

    const displayToastNotification = () => {

        if(!isModeAdmin){
            toast.info("Mode admin activé", {
                icon: <FaUserSecret />,
                theme: "dark",
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        setIsModeAdmin(!isModeAdmin);
    }


  return (
        <NavBarStyledRigthSide className="rigth-side">
            <ToggleButton
                labelIfChecked="DÉSACTIVER LE MODE ADMIN"
                labelIfUnchecked="ACTIVER LE MODE ADMIN"
                colorOfBgChecked="#b3ca07"
                onToggle={displayToastNotification}
            />

            <ToastContainer className="toaster" bodyClassName="body-toast" />
            <Profile username={username}/>

        </NavBarStyledRigthSide>
  )
}


NavbarRigthSide.propTypes = {
    username: PropTypes.string.isRequired,
}

const NavBarStyledRigthSide = styled.nav`

    display: flex;
    gap: 50px;
    align-items: center;
    padding-right: 50px;
  

    .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
    
`;

