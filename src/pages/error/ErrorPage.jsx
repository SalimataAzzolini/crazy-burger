import {  useNavigate } from 'react-router-dom';


const ErrorPage = () => {

    let navigate = useNavigate();
    return (
        <div>
            <h4> Error Page </h4>

            <button onClick={() => navigate('/login')}>  Retour à la page d accueil</button>
        </div>
    );
};

export default ErrorPage;