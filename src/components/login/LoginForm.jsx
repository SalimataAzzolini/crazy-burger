import { useState } from "react";
import {  useNavigate } from 'react-router-dom';


const LoginForm = () => {

    let navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    const validateForm = () => {
        if (username === '') {
            setErrorMessage('Veuillez entrer votre nom');
            return false;
        }
        return true; 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        navigate("/order", { replace: true, state: {username } });
        setUsername('');
    }


    return (
        <form onSubmit={handleSubmit}>   
                <h1> Bienvenue au Ben Burger ! </h1>
                <h4> Connectez-vous</h4>
                <input type="text" placeholder="Entrez votre prénom..." required
                    value={username} onChange={handleChange}
                />
                {
                    errorMessage && <p className="error-message-form" style={{color : 'red', fontSize : '10px' }}>{errorMessage}</p>
                }
                <button type="submit"> Accéder à votre espace</button>
            </form>
    );
};

export default LoginForm;