import styled from "styled-components";
import NavbarRigthSide from "./NavbarRigthSide";

import Logo from "../../../components/reusable-ui/Logo";
import { theme } from "../../../theme";
import { refreshPage } from "../../../utils/window";

export default function Navbar() {
  return (
    <NavBarStyled className="navbar">
      <Logo className={"logo-order-page"} onClick={refreshPage} />
      <NavbarRigthSide />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page {
    cursor: pointer;

    h1 {
      font-size: 40px;
    }

    img {
      height: 100px;
      width: 80px;
      margin: 0 5px;
    }
  }
`;
