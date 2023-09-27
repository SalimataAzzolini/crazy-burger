import styled from 'styled-components';
import { theme } from '../../../theme';
import Menu from './Menu';
import Admin from './Admin/Admin';
import { useContext } from 'react';
import OrderContext from '../../../context/OrderContext';

export default function MainOrder() {

  const {isModeAdmin } = useContext(OrderContext);


  return (
    <MainOrderStyled>
        {/* <div className="basket"> Basket </div> */}
        <div className="menu-and-admin"> 
          <Menu />
          {isModeAdmin && <Admin /> }
        </div>
    </MainOrderStyled>
  )
}

const MainOrderStyled = styled.div`

    background: ${theme.colors.background_white};
    height: calc(95vh - 10vh); /* flex-grow: 1; */
    

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;

    display: grid;
    /* grid-template-columns:  25% 1fr; */
    grid-template-columns:  1fr;
    overflow-y: scroll;


    //this code will be use for the basket component
    /* .basket{
      background: #efa1a1;
    } */

    .menu-and-admin{
      position: relative;
      overflow: hidden;
      display: grid;
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};


  } 
`;
