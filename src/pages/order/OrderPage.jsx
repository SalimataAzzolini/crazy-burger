import { useLocation } from 'react-router-dom';

const OrderPage = () => {

    const location = useLocation();
    const { state } = location;

    if (!state || !state.name) {
        return <div>Erreur: Nom nom transmis</div>;
    }

    const { name } = state;

    return (
        <div>
            <h3>Bonjour {name} </h3>
            <button
                onClick={() => window.location.href = '/'}
            > Déconnexion </button>
        </div>
    );
};

export default OrderPage;
