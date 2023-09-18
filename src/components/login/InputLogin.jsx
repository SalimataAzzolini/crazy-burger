import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';
import { theme } from '../../theme';
import PropTypes from 'prop-types'; 

const InputLogin = ({ value, onChange, placeholder, required }) => {
  return (
    <InputLoginStyled className="input-with-icon">
      <BsPersonCircle className="icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={ required ? true : false }
      />
    </InputLoginStyled>
  );
};

InputLogin.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};

const InputLoginStyled = styled.div`
   
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 5px;
        padding: 18px 24px;
        margin : 18px 0;
        min-width: 350px;

        .icon{
            color: ${theme.colors.greySemiDark};
            width: 15px;
            height: 15px;
            margin-right: 10px;
        }

        input{
            border: none;
            font-size: 15px;
            width: 100%;
        }

        ::placeholder{
            background-color: white;
            color: ${theme.colors.greySemiDark};
        }
    
`;

export default InputLogin;