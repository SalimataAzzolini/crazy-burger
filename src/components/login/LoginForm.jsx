import { useState } from "react";
import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components';



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
                <h1> Bienvenue au Ben Burger ! </h1>
                <h4> Connectez-vous</h4>
                <input type="text" placeholder="Entrez votre prénom" required
                    value={username} onChange={handleChange}
                />
                <button type="submit"> Accéder à mon espace</button>
            </LoginFormStyled>
    );
};


const LoginFormStyled  = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;


export default LoginForm;
