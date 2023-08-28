import { useState } from "react";

const LoginForm = () => {

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

    const handleClick = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        alert(`Bienvenue ${name}`);
        setName('');

    }
    return (
        <form >   
                <h1> Bienvenue chez nous</h1>
                <h4> Connectez-vous</h4>
                <input type="text" placeholder="Entrez votre prénom.." required={true}
                    value={name} onChange={handleChange}
                />
                {
                    errorMessage !== '' && <p className="error-message-form" style={{color : 'red', fontSize : '10px' }}>{errorMessage}</p>
                }
                <button onClick={handleClick}> Accéder à votre espace</button>
            </form>
    );
};

export default LoginForm;