import { useState } from "react";
import {  useNavigate } from 'react-router-dom';


const LoginForm = () => {

    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleChange = (e) => {
        setName(e.target.value);
    }

    const validateForm = () => {
        if (name === '') {
            setErrorMessage('Veuillez entrer votre nom');
            return false;
        }
        return true; 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        navigate("/order", { replace: true, state: { name } });
        setName('');

    }
    return (
        <form onSubmit={handleSubmit}>   
                <h1> Bienvenue chez nous ! </h1>
                <h4> Connectez-vous</h4>
                <input type="text" placeholder="Entrez votre prénom..." required
                    value={name} onChange={handleChange}
                />
                {
                    errorMessage && <p className="error-message-form" style={{color : 'red', fontSize : '10px' }}>{errorMessage}</p>
                }
                <button type="submit"> Accéder à votre espace</button>
            </form>
    );
};

export default LoginForm;