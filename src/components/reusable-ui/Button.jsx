import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { theme } from "../../theme";

Button.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.node,
  version: PropTypes.oneOf(["normal", "success"]),
  className: PropTypes.string,
};

export default function Button({ label, Icon, version = "normal", className }) {
  return (
    <ButtonStyled className={className} version={version}>
      <span type="submit"> {label}</span>
      <div className="icon"> {Icon && Icon}</div>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ version }) =>
    extraStyle[
      version
    ]}; //ici on utilise la version de la props pour déterminer le style à appliquer
`;

const extraStylePrimary = css`
  width: 100%;
  border: 1px solid ${theme.colors.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  background-color: ${theme.colors.primary};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.background_white};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.primary};
    background-color: white;
    border-color: ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex;
  }
`;

const extraStyleSuccess = css`
  height: 30px;
  padding: 20px 30px;
  border: 1px solid ${theme.colors.success};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  background-color: ${theme.colors.success};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.background_white};
    border-color: ${theme.colors.success};
    color: ${theme.colors.success};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.success};
    background-color: white;
    border-color: ${theme.colors.success};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex;
  }
`;

const extraStyle = {
  normal: extraStylePrimary,
  success: extraStyleSuccess,
};
