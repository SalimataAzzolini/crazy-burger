import { useState } from "react";


const LoginPage = () => {

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
        <div>
            <h1> Bienvenue chez nous</h1>
            <h4> Connectez-vous</h4>

            <form >
                <input type="text" placeholder="Entrez votre prénom.." required={true}
                    value={name} onChange={handleChange}
                />
                {
                    errorMessage !== '' && <p className="error-message-form" style={{color : 'red', fontSize : '10px' }}>{errorMessage}</p>
                }
                <button onClick={handleClick}> Accéder à votre espace</button>
            </form>
        </div>
    );
};

export default LoginPage;