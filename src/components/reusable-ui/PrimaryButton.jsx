import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from "../../theme";

export default function PrimaryButton({label, Icon}) {
  return (
    <PrimaryButtonStyled className="button-with-icon">

        <span type="submit"> {label}</span>
        {Icon && Icon}

    </PrimaryButtonStyled>
  )
}

PrimaryButton.propTypes = {
    label: PropTypes.string.isRequired,
    Icon: PropTypes.node,
};


const PrimaryButtonStyled = styled.button`
  
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
        color : white;
        cursor: pointer;
    

        &:hover {
            background-color: ${theme.colors.background_white};
            border-color: ${theme.colors.primary};
            color : ${theme.colors.primary};
            transition: all 200ms ease-out;
        }

        &:active{
            color : ${theme.colors.primary};
            background-color: white;
            border-color: ${theme.colors.primary};
        }

        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }
`;
