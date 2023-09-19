import styled from 'styled-components';
import { theme } from '../../theme';

export default function MainOrder() {

  return (
    <MainOrderStyled>
        MainOrder
    </MainOrderStyled>
  )
}

const MainOrderStyled = styled.div`
     
    background: ${theme.colors.background_white};
    flex-grow: 1;

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
        
`;
