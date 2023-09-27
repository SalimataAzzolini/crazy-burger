import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import MainOrder from './MainOrder/MainOrder';
import { theme } from '../../theme';
import { useState } from 'react';
import OrderContext from '../../context/OrderContext';


export default function OrderPage () {

    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState (false);
    const [isAddSelected , setIsAddSelected] = useState (true);
    const [isEditSelected , setIsEditSelected] = useState (false);
    

    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        isAddSelected,
        setIsAddSelected,
        isEditSelected,
        setIsEditSelected
    };

    const location = useLocation();
    const { state } = location;
    if (!state || !state.username) {
        return <div>Erreur: Nom nom transmis</div>;
    }
    const { username } = state;


    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled >
                <div className="container">
                    <Navbar username={username} />
                    <MainOrder />
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
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

