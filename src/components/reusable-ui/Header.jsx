import styled from "styled-components";
import PropType from "prop-types";
import { theme } from "../../theme";

Header.propTypes = {
  children: PropType.node.isRequired,
};

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`;
