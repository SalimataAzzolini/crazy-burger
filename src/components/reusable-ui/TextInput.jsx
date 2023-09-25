import styled from 'styled-components';
import { theme } from '../../theme';
import PropTypes from 'prop-types'; 



export default function TextInput ({ value, onChange, Icon, ...extraProps}) {

  return (
    <TextInputStyled className="input-with-icon">
      {Icon && Icon}
      <input
        type="text"
        value={value}
        onChange={onChange}
        {...extraProps}
      />
    </TextInputStyled>
  );
}

TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    Icon: PropTypes.node,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};

const TextInputStyled = styled.div`
   
        display: flex;
        align-items: center;
        background-color: ${theme.colors.white  };
        border-radius: ${theme.borderRadius.round};
        padding: 18px 24px;
        margin : 18px 0;
        min-width: 350px;

        input{
            border: none;
            font-size: ${theme.fonts.size.SM};
            width: 100%;

            ::placeholder{
            background-color: ${theme.colors.background_white};
            color: ${theme.colors.greySemiDark};
            
          }
        }

        .icon{
            color: ${theme.colors.greySemiDark};
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }

  
    
`;
