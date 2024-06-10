import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { theme } from "../../theme";
import React from "react";

const TextInput = React.forwardRef(function TextInput(
  { value, onChange, Icon, className, version = "normal", ...extraProps },
  ref
) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon"> {Icon && Icon}</div>
      <input
        type="text"
        ref={ref}
        value={value}
        onChange={onChange}
        {...extraProps}
      />
    </TextInputStyled>
  );
});

export default TextInput;

TextInput.propTypes = {
  value: PropTypes.string || PropTypes.number,
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.node,
  className: PropTypes.string,
  version: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

const TextInputStyled = styled.div`
  display: flex;
  align-items: center;

  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px;
  /* min-width: 350px; */

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    ::placeholder {
      background-color: ${theme.colors.background_white};
      color: ${theme.colors.greySemiDark};
    }
  }

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
    /* color: ${theme.colors.greySemiDark};
            width: 20px;
            height: 20px;
            margin-right: 10px; */
  }

  /* ${(props) => {
    if (props.version === "normal") return extraStyleNormal;
    if (props.version === "minimalist") return extraStyleMinimalist;
  }} */

  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};
