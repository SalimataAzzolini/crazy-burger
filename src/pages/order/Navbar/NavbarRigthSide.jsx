import { toast } from "react-toastify";
import { MdAdminPanelSettings } from "react-icons/md";
import styled from "styled-components";
import PropTypes from "prop-types";

import ToggleButton from "../../../components/reusable-ui/ToggleButton";
import Profile from "./Profile";
import { useContext } from "react";
import ToastAdmin from "./ToastAdmin";
import OrderContext from "../../../context/OrderContext";

export default function NavbarRigthSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        icon: <MdAdminPanelSettings />,
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
  };

  return (
    <NavBarStyledRigthSide className="rigth-side">
      <ToggleButton
        isModeAdmin={isModeAdmin}
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        colorOfBgChecked="#b3ca07"
        onToggle={displayToastNotification}
      />

      <ToastAdmin />
      <Profile />
    </NavBarStyledRigthSide>
  );
}

NavbarRigthSide.propTypes = {
  username: PropTypes.string.isRequired,
};

const NavBarStyledRigthSide = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;
  padding-right: 50px;
`;
