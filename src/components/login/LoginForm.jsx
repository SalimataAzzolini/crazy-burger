import { useState } from "react";
import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {IoChevronForwardOutline} from 'react-icons/io5';


import { theme } from "../../theme";
import TextInput from "../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";



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
                <h4> Connecte-toi</h4>

                <TextInput
                    value={username}
                    onChange={handleChange}
                    placeholder="Entre ton prénom"
                    required
                    Icon={<BsPersonCircle className="icon"/>}
                />

                <button className="button-with-icon">
                    <span type="submit"> Accéder à mon espace</span>
                    <IoChevronForwardOutline className="icon" />
                </button>
           
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
    padding: 0rem 2rem 2rem;
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
        font-size: 34px;
    }


    .button-with-icon{
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
            background-color: ${theme.colors.primaryLight};
            border-color: ${theme.colors.primaryLight};
            color : white;
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
    }

    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin-left : 10px;
    }


`;


export default LoginForm;
