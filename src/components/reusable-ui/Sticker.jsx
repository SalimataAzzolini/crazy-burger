import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../theme";

Sticker.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

export default function Sticker({ label = "new", className }) {
  return <StickerStyled className={className}>{label}</StickerStyled>;
}

const StickerStyled = styled.span`
  font-size: ${theme.fonts.size.XXXS};
  padding: 1em;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${theme.colors.redSecondary};
  border: none;
  color: white;
  text-transform: uppercase;
`;
