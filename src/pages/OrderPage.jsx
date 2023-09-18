import { useLocation } from 'react-router-dom';

const OrderPage = () => {

    const location = useLocation();
    const { state } = location;

    if (!state || !state.username) {
        return <div>Erreur: Nom nom transmis</div>;
    }

    const { username } = state;

    return (
        <div>
            <h3>Bonjour {username} </h3>
            <button
                onClick={() => window.location.href = '/'}
            > Déconnexion </button>
        </div>
    );
};

export default OrderPage;
