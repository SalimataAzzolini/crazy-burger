import styled from "styled-components";
import { theme } from "../../../../theme";


export default function AdminPannel() {
  return (
    <AdminPannelStyled >AdminPannel</AdminPannelStyled>
  )
}


const AdminPannelStyled = styled.div`
  
    border: 2px solid green;
    height: 250px;
    background: ${theme.colors.white};
    border : 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`;