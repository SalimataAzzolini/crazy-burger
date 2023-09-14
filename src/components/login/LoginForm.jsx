import { useState } from "react";
import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {BsPersonCircle} from 'react-icons/bs';


import { theme } from "../../theme";



const LoginForm = () => {

    let navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        setUsername(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/order", { replace: true, state: {username } });
        setUsername('');
    }


    return (
            <LoginFormStyled onSubmit={handleSubmit}>   
                <h1> Bienvenue chez nous ! </h1>
                <hr />
                <h4> Connectez-vous</h4>
                <div className="input-with-icon">
                    <BsPersonCircle className="icon" />
                    <input 
                        type="text" 
                        placeholder="Entrez votre prénom" 
                        required
                        value={username} 
                        onChange={handleChange}
                    />
                </div>
                <button type="submit"> Accéder à mon espace</button>
            </LoginFormStyled>
    );
};


const LoginFormStyled  = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: green; */
    font-family: 'Amatic SC', cursive;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    max-width: 500px;
    min-width: 400px;
    margin: 0 auto;
    text-align: center;

    hr{
       
        border: 1.5px solid #F56A2C;
        margin-bottom: 40px;
        width: 100%;
    }

    h1{
        color : white;
        font-size: 48px;
    }

    h2{
        color : ${theme.colors.greySemiDark};
        margin : 20px 10px 10px;
        font-size: 36px;
    }
    h4{
        color : white;
        margin : 20px 10px 10px;
        font-size: 30px;
    }

    .input-with-icon {
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 5px;
        padding: 18px 100px;
        margin : 18px 0;

        .icon{
            color: ${theme.colors.greySemiDark};
            width: 15px;
            height: 15px;
            margin-right: 10px;
        }

        input{
            border: none;
            font-size: 15px;
        }

        ::placeholder{
            background-color: white;
            color: ${theme.colors.greySemiDark};
        }
    }
`;


export default LoginForm;
