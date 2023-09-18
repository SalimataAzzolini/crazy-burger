import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


export default function OrderPage () {

    const location = useLocation();
    const { state } = location;

    if (!state || !state.username) {
        return <div>Erreur: Nom nom transmis</div>;
    }

    const { username } = state;

    return (
        <OrderPageStyled >
            <div className="container"> 
                <h3>Bonjour {username} </h3>
                <button onClick={() => window.location.href = '/'} > Déconnexion </button>
                OrderPageStyled 
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    background : orange;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        background: red;
        height: 95vh;
        width: 1400px;
    }
  
`;

