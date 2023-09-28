import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function AdminPannel() {
  const { isAddSelected, isEditSelected } = useContext(OrderContext);

  return (
    <AdminPannelStyled>
      {isAddSelected && <div>Ajouter un produit</div>}
      {isEditSelected && <div> Modifier un produit </div>}
    </AdminPannelStyled>
  );
}

const AdminPannelStyled = styled.div`
  border: 2px solid green;
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
