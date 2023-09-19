import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import MainOrder from './MainOrder';
import { theme } from '../../theme';


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
                <Navbar username={username} />
                <MainOrder />
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    background : ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        background: red;
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
    }
  
`;

